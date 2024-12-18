import { screen } from '@testing-library/react';
import Footer from './Footer';
import { renderWithProviders } from '../../tests/testUtils';

describe('Footer', () => {
  function renderComponent() {
    renderWithProviders(<Footer />, {
      providers: ['ThemeProvider', 'MemoryRouter'],
    });

    return {
      container: screen.getByTestId('Footer'),
      contactDetails: screen.getAllByRole('listitem'),
      navigationLinks: screen.getAllByRole('link'),
    };
  }

  test('renders the container with the correct test id', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  test('renders the contact details correctly', () => {
    const { contactDetails } = renderComponent();

    expect(contactDetails[0]).toHaveTextContent(
      'Address: 1762 School House Road'
    );
    expect(contactDetails[1]).toHaveTextContent('Call us: 1233-777');
    expect(contactDetails[2]).toHaveTextContent('Email: grocerly@contact.com');
    expect(contactDetails[3]).toHaveTextContent(
      'Work hours: 8:00 - 20:00, Sunday - Thursday'
    );
  });

  test('renders the navigation links correctly', () => {
    const { navigationLinks } = renderComponent();

    expect(navigationLinks.length).toBe(19);
    expect(navigationLinks[0]).toHaveTextContent('wishlist');
    expect(navigationLinks[1]).toHaveTextContent('cart');
    expect(navigationLinks[2]).toHaveTextContent('track order');
    expect(navigationLinks[3]).toHaveTextContent('shipping details');
    expect(navigationLinks[4]).toHaveTextContent('about us');
    expect(navigationLinks[5]).toHaveTextContent('contact');
    expect(navigationLinks[6]).toHaveTextContent('hot deals');
    expect(navigationLinks[7]).toHaveTextContent('promotions');
    expect(navigationLinks[8]).toHaveTextContent('new products');
    expect(navigationLinks[9]).toHaveTextContent('payments');
    expect(navigationLinks[10]).toHaveTextContent('refund');
    expect(navigationLinks[11]).toHaveTextContent('checkout');
    expect(navigationLinks[12]).toHaveTextContent('shipping');
    expect(navigationLinks[13]).toHaveTextContent('q & a');
    expect(navigationLinks[14]).toHaveTextContent('privacy policy');
  });
});
