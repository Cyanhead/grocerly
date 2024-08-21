import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import NavBar from './NavBar';
import { renderWithProviders } from '../../tests/testUtils';
import { act } from 'react';

describe('<NavBar />', () => {
  async function renderComponent() {
    await act(async () => {
      renderWithProviders(<NavBar />, {
        providers: ['MemoryRouter', 'AuthProvider', 'ThemeProvider'],
        route: '/',
      });
    });

    return {
      logo: screen.getByRole('img', { name: /logo/i }),
      searchBar: screen.getAllByRole('searchbox', { hidden: true })[0],
      menuButton: screen.getByRole('button', { name: /menu/i }),
    };
  }

  it('should render a logo, search bar and menu button', async () => {
    const { logo, searchBar, menuButton } = await renderComponent();

    expect(logo).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();
  });
});
