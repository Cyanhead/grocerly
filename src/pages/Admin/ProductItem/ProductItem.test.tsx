import { screen } from '@testing-library/react';
import ProductItem from './ProductItem';
import { renderWithProviders } from '../../../tests/testUtils';

describe(
  '<ProductItem />',
  () => {
    function renderComponent() {
      renderWithProviders(<ProductItem />, {
        providers: ['ThemeProvider'],
      });

      return {
        productItem: screen.getByRole('ProductItem'),
      };
    }

    it('should render ProductItem_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
      const { productItem } = renderComponent();

      expect(productItem).toBeInTheDocument();

      // render(<ProductItem />);

      // expect(screen.getByRole('ProductItem')).toBeInTheDocument();
    });
  },
  { skip: true }
);
