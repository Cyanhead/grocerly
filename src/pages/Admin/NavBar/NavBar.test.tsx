import { act, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<NavBar />', () => {
  async function renderComponent() {
    await act(async () =>
      renderWithProviders(<NavBar setShowSideBar={() => {}} />, {
        providers: ['ThemeProvider', 'MemoryRouter', 'AuthProvider'],
      })
    );

    return {
      sidebarButton: screen.getByRole('button', { name: /navigation/i }),
      logoLink: screen.getByRole('link', { name: /logo/i }),
    };
  }

  it('should render', async () => {
    const { sidebarButton, logoLink } = await renderComponent();

    expect(sidebarButton).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
  });
});
