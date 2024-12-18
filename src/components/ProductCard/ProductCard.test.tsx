import { screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { renderWithProviders } from '../../tests/testUtils';

describe('<ProductCard />', () => {
  function renderComponent() {
    renderWithProviders(<ProductCard />, {
      providers: ['ThemeProvider'],
    });

    return {
      productCard: screen.getByRole('ProductCard'),
    };
  }

  it('should render ProductCard_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { productCard } = renderComponent();

    expect(productCard).toBeInTheDocument();

    // render(<ProductCard />);

    // expect(screen.getByRole('ProductCard')).toBeInTheDocument();
  });
});
