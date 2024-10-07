import { screen } from '@testing-library/react';
import AllProducts from './AllProducts';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<AllProductsTable />', () => {
  function renderComponent() {
    renderWithProviders(<AllProducts />, {
      providers: ['ThemeProvider'],
    });

    return {
      allProductsTable: screen.getByRole('AllProductsTable'),
    };
  }

  it('should render AllProductsTable_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { allProductsTable } = renderComponent();

    expect(allProductsTable).toBeInTheDocument();

    // render(<AllProductsTable />);

    // expect(screen.getByRole('AllProductsTable')).toBeInTheDocument();
  });
});
