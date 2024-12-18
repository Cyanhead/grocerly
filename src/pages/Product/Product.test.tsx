import { screen } from '@testing-library/react';
import Product from './Product';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Product />', () => {
  function renderComponent() {
    renderWithProviders(<Product />, {
      providers: ['ThemeProvider'],
    });

    return {
      product: screen.getByRole('Product'),
    };
  }

  it('should render Product_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { product } = renderComponent();

    expect(product).toBeInTheDocument();

    // render(<Product />);

    // expect(screen.getByRole('Product')).toBeInTheDocument();
  });
});
