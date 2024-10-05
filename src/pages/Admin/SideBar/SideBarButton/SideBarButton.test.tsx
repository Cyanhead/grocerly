import { screen } from '@testing-library/react';
import SideBarButton from './SideBarButton';
import { renderWithProviders } from '../../../../tests/testUtils';
import { TestTube } from 'lucide-react';

describe('<SideBarButton />', () => {
  function renderComponent() {
    renderWithProviders(
      <SideBarButton to={'/sample'} icon={TestTube} children={undefined} />,
      {
        providers: ['ThemeProvider', 'MemoryRouter'],
      }
    );

    return {
      sideBarButton: screen.getByRole('link'),
    };
  }

  it('should render a link', () => {
    const { sideBarButton } = renderComponent();

    expect(sideBarButton).toBeInTheDocument();
  });
});
