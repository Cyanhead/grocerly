import { screen } from '@testing-library/react';
import Details from './Details';
import { renderWithProviders } from '../../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<Details />', () => {
  function renderComponent() {
    renderWithProviders(
      <Details
        image={''}
        name={''}
        additionalInfo={''}
        stats={[]}
        setShowEditModal={() => {}}
      />,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      image: screen.getByRole('img', { name: /product/i }),
      menuButton: screen.getByRole('button', { name: /menu/i }),
    };
  }

  it('should render component showing an image and a menu button', () => {
    const { image, menuButton } = renderComponent();

    expect(image).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });

  it('should show a list of menu options when menu button is clicked', async () => {
    const { menuButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(menuButton);

    const editButton = screen.getByRole('button', { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });
});
