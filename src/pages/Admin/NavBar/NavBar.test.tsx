import { screen } from '@testing-library/react';
import NavBar from './NavBar';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<NavBar />', () => {
  function renderComponent() {
    renderWithProviders(<NavBar />, {
      providers: ['ThemeProvider'],
    });

    return {
      navBar: screen.getByRole('NavBar'),
    };
  }

  it('should render NavBar_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { navBar } = renderComponent();

    expect(navBar).toBeInTheDocument();

    // render(<NavBar />);

    // expect(screen.getByRole('NavBar')).toBeInTheDocument();
  });
});
