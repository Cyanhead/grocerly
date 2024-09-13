import { screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Dashboard />', () => {
  function renderComponent() {
    renderWithProviders(<Dashboard />, {
      providers: ['ThemeProvider'],
    });

    return {
      dashboard: screen.getByRole('Dashboard'),
    };
  }

  it('should render Dashboard_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { dashboard } = renderComponent();

    expect(dashboard).toBeInTheDocument();

    // render(<Dashboard />);

    // expect(screen.getByRole('Dashboard')).toBeInTheDocument();
  });
});
