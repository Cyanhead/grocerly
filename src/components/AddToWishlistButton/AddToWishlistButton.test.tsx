import { screen } from '@testing-library/react';
import AddToWishlistButton from './AddToWishlistButton';
import { renderWithProviders } from '../../tests/testUtils';

describe('<AddToWishlistButton />', () => {
  function renderComponent() {
    renderWithProviders(<AddToWishlistButton />, {
      providers: ['ThemeProvider'],
    });

    return {
      addToWishlistButton: screen.getByRole('AddToWishlistButton'),
    };
  }

  it('should render AddToWishlistButton_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { addToWishlistButton } = renderComponent();

    expect(addToWishlistButton).toBeInTheDocument();

    // render(<AddToWishlistButton />);

    // expect(screen.getByRole('AddToWishlistButton')).toBeInTheDocument();
  });
});
