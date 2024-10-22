import { screen } from '@testing-library/react';
import Products from './Products';
import { renderWithProviders } from '../../../tests/testUtils';

describe(
  '<Products />',
  () => {
    function renderComponent() {
      renderWithProviders(<Products />, {
        providers: ['ThemeProvider'],
      });

      return {
        productLink: screen.getByRole('link'),
      };
    }

    it('should render Products_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
      const { productLink } = renderComponent();

      expect(productLink).toBeInTheDocument();
    });
  },
  { skip: true }
);
