import { screen } from '@testing-library/react';
import Checkout from './Checkout';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Checkout />', () => {
  function renderComponent() {
    renderWithProviders(<Checkout />, {
      providers: ['ThemeProvider'],
    });

    return {
      checkout: screen.getByRole('Checkout'),
    };
  }

  it('should render Checkout_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { checkout } = renderComponent();

    expect(checkout).toBeInTheDocument();

    // render(<Checkout />);

    // expect(screen.getByRole('Checkout')).toBeInTheDocument();
  });
});
