import { act, screen } from '@testing-library/react';
import User from './User';
import { renderWithProviders } from '../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<User />', () => {
  async function renderComponent() {
    await act(async () => {
      renderWithProviders(<User />, {
        providers: ['MemoryRouter', 'AuthProvider', 'ThemeProvider'],
        route: '/',
      });
    });

    return {
      userDropdownButton: screen.getByRole('button', {
        name: /menu/i,
      }),
    };
  }

  it('should render the button', async () => {
    const { userDropdownButton } = await renderComponent();

    expect(userDropdownButton).toBeInTheDocument();
  });

  it('it should show a list when clicked', async () => {
    const { userDropdownButton } = await renderComponent();

    const user = userEvent.setup();
    await user.click(userDropdownButton);

    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();
  });
});
