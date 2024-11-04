import { screen } from '@testing-library/react';
import WishlistButton from './WishlistButton';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<WishlistButton />', () => {
  function renderComponent() {
    renderWithProviders(<WishlistButton />, {
      providers: ['ThemeProvider'],
    });

    return {
      wishlistButton: screen.getByRole('WishlistButton'),
    };
  }

  it('should render WishlistButton_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { wishlistButton } = renderComponent();

    expect(wishlistButton).toBeInTheDocument();

    // render(<WishlistButton />);

    // expect(screen.getByRole('WishlistButton')).toBeInTheDocument();
  });
});
