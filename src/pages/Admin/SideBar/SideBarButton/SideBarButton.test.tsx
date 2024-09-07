import { screen } from '@testing-library/react';
import SideBarButton from './SideBarButton';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<SideBarButton />', () => {
  function renderComponent() {
    renderWithProviders(<SideBarButton />, {
      providers: ['ThemeProvider'],
    });

    return {
      sideBarButton: screen.getByRole('SideBarButton'),
    };
  }

  it('should render SideBarButton_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { sideBarButton } = renderComponent();

    expect(sideBarButton).toBeInTheDocument();

    // render(<SideBarButton />);

    // expect(screen.getByRole('SideBarButton')).toBeInTheDocument();
  });
});
