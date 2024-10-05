import { screen } from '@testing-library/react';
import SideBar from './SideBar';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<SideBar />', () => {
  const handleShowSideBar = vi.fn();

  function renderComponent() {
    const { rerender } = renderWithProviders(
      <SideBar showSideBar={false} setShowSideBar={handleShowSideBar} />,
      {
        providers: ['ThemeProvider', 'MemoryRouter'],
      }
    );

    return {
      rerender,
      sideBar: screen.getByRole('complementary'),
    };
  }

  it('should render the sidebar out of view', () => {
    const { sideBar } = renderComponent();

    expect(sideBar).toHaveStyle('left: -100%');
  });
});
