import { screen } from '@testing-library/react';
import Orders from './Orders';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Orders />', () => {
  function renderComponent() {
    renderWithProviders(<Orders />, {
      providers: ['ThemeProvider'],
    });

    return {
      orders: screen.getByRole('Orders'),
    };
  }

  it('should render Orders_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { orders } = renderComponent();

    expect(orders).toBeInTheDocument();

    // render(<Orders />);

    // expect(screen.getByRole('Orders')).toBeInTheDocument();
  });
});
