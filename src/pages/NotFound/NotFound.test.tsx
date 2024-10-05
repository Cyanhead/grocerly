import { screen } from '@testing-library/react';
import NotFound from './NotFound';
import { renderWithProviders } from '../../tests/testUtils';

describe('<NotFound />', () => {
  function renderComponent() {
    renderWithProviders(<NotFound />, {
      providers: ['ThemeProvider', 'MemoryRouter'],
    });

    return {
      heading: screen.getByRole('heading', { name: /Not Found/i }),
      goBackButton: screen.getByRole('button', { name: /back/i }),
      dashboardLink: screen.getByRole('link', { name: /dashboard/i }),
    };
  }

  it('should render a "Not Found" heading, a back button and a link to the dashboard', () => {
    const { heading, goBackButton, dashboardLink } = renderComponent();

    expect(heading).toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
  });
});
