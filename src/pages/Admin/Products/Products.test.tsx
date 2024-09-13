import { screen } from '@testing-library/react';
import Products from './Products';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Products />', () => {
  function renderComponent() {
    renderWithProviders(<Products />, {
      providers: ['ThemeProvider'],
    });

    return {
      products: screen.getByRole('Products'),
    };
  }

  it('should render Products_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { products } = renderComponent();

    expect(products).toBeInTheDocument();

    // render(<Products />);

    // expect(screen.getByRole('Products')).toBeInTheDocument();
  });
});
