import { screen } from '@testing-library/react';
import OrderItemProducts from './OrderItemProducts';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<OrderItemProducts />', () => {
  function renderComponent() {
    renderWithProviders(<OrderItemProducts />, {
      providers: ['ThemeProvider'],
    });

    return {
      orderItemProducts: screen.getByRole('OrderItemProducts'),
    };
  }

  it('should render OrderItemProducts_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { orderItemProducts } = renderComponent();

    expect(orderItemProducts).toBeInTheDocument();

    // render(<OrderItemProducts />);

    // expect(screen.getByRole('OrderItemProducts')).toBeInTheDocument();
  });
});
