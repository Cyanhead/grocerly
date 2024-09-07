import { screen } from '@testing-library/react';
import SideBar from './SideBar';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<SideBar />', () => {
  function renderComponent() {
    renderWithProviders(<SideBar />, {
      providers: ['ThemeProvider'],
    });

    return {
      sideBar: screen.getByRole('SideBar'),
    };
  }

  it('should render SideBar_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { sideBar } = renderComponent();

    expect(sideBar).toBeInTheDocument();

    // render(<SideBar />);

    // expect(screen.getByRole('SideBar')).toBeInTheDocument();
  });
});
