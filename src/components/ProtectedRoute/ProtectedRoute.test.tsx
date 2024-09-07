import { screen } from '@testing-library/react';
import ProtectedRoute from './ProtectedRoute';
import { renderWithProviders } from '../../tests/testUtils';

describe('<ProtectedRoute />', () => {
  function renderComponent() {
    renderWithProviders(<ProtectedRoute />, {
      providers: ['ThemeProvider'],
    });

    return {
      protectedRoute: screen.getByRole('ProtectedRoute'),
    };
  }

  it('should render ProtectedRoute_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { protectedRoute } = renderComponent();

    expect(protectedRoute).toBeInTheDocument();

    // render(<ProtectedRoute />);

    // expect(screen.getByRole('ProtectedRoute')).toBeInTheDocument();
  });
});
