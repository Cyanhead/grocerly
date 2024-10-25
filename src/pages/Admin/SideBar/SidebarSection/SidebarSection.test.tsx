import { screen } from '@testing-library/react';
import SidebarSection from './SidebarSection';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<SidebarSection />', () => {
  function renderComponent() {
    renderWithProviders(<SidebarSection />, {
      providers: ['ThemeProvider'],
    });

    return {
      sidebarSection: screen.getByRole('SidebarSection'),
    };
  }

  it('should render SidebarSection_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { sidebarSection } = renderComponent();

    expect(sidebarSection).toBeInTheDocument();

    // render(<SidebarSection />);

    // expect(screen.getByRole('SidebarSection')).toBeInTheDocument();
  });
});
