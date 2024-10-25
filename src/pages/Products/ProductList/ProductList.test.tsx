import { screen } from '@testing-library/react';
import ProductList from './ProductList';
import { renderWithProviders } from '../../tests/testUtils';

describe('<ProductList />', () => {
  function renderComponent() {
    renderWithProviders(<ProductList />, {
      providers: ['ThemeProvider'],
    });

    return {
      productList: screen.getByRole('ProductList'),
    };
  }

  it('should render ProductList_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { productList } = renderComponent();

    expect(productList).toBeInTheDocument();

    // render(<ProductList />);

    // expect(screen.getByRole('ProductList')).toBeInTheDocument();
  });
});
