import { screen } from '@testing-library/react';
import Admin from './Admin';
import { renderWithProviders } from '../../tests/testUtils';
import { act } from 'react';

describe('<Admin />', () => {
  async function renderComponent() {
    await act(async () =>
      renderWithProviders(<Admin />, {
        providers: ['ThemeProvider', 'MemoryRouter', 'AuthProvider'],
        route: '/admin/products',
      })
    );

    return {
      heading: screen.getByRole('heading'),
      adminPageGrid: screen.getByRole('region'),
      sideBar: screen.getByRole('complementary'),
      navBar: screen.getByRole('banner'),
    };
  }

  it('should render a sidebar and a navbar', async () => {
    const { sideBar, navBar } = await renderComponent();

    expect(sideBar).toBeInTheDocument();
    expect(navBar).toBeInTheDocument();
  });

  it('should render a heading and a grid', async () => {
    const { heading, adminPageGrid } = await renderComponent();

    expect(heading).toBeInTheDocument();
    expect(adminPageGrid).toHaveStyle('display: grid');
  });
});
