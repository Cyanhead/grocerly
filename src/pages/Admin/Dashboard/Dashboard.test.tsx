import { screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { renderWithProviders } from '../../../tests/testUtils';

describe(
  '<Dashboard />',
  () => {
    function renderComponent() {
      renderWithProviders(<Dashboard />, {
        providers: ['ThemeProvider'],
      });

      return {
        heading: screen.getByRole('heading'),
      };
    }

    it('should render the dashboard page', () => {
      const { heading } = renderComponent();

      // screen.debug();
      expect(heading).toBeInTheDocument();
    });
  },
  { skip: true }
);
