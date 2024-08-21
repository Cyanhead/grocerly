import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Menu from './Menu';
import { TestTube } from 'lucide-react';
import { renderWithProviders } from '../../tests/testUtils';
import userEvent from '@testing-library/user-event';
import { MenuPropsType } from './Menu.type';

const optionList: MenuPropsType['options'] = [
  {
    type: 'button',
    label: 'test option 1',
    icon: TestTube,
    onClick: vi.fn(),
  },
];

describe('Menu', () => {
  function renderComponent() {
    renderWithProviders(<Menu options={optionList}>Test Menu</Menu>, {
      providers: ['ThemeProvider'],
    });

    return {
      menuButton: screen.getByRole('button', { name: /test menu/i }),
    };
  }

  it('should render a button', async () => {
    const { menuButton } = await renderComponent();

    expect(menuButton).toBeInTheDocument();
  });

  it('should show a list of menu options when clicked', async () => {
    const { menuButton } = await renderComponent();

    const user = userEvent.setup();
    await user.click(menuButton);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('should call function passed to menu option upon option click ', async () => {
    const { menuButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(menuButton);

    const menuOption = await screen.findByRole('button', {
      name: /test option/i,
    });
    expect(menuOption).toBeInTheDocument();

    await user.click(menuOption);

    expect(optionList[0].onClick).toHaveBeenCalled();
  });
});
