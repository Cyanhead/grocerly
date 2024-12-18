import { screen } from '@testing-library/react';
import Profile from './Profile';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Profile />', () => {
  function renderComponent() {
    renderWithProviders(<Profile />, {
      providers: ['ThemeProvider'],
    });

    return {
      profile: screen.getByRole('Profile'),
    };
  }

  it('should render Profile_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { profile } = renderComponent();

    expect(profile).toBeInTheDocument();

    // render(<Profile />);

    // expect(screen.getByRole('Profile')).toBeInTheDocument();
  });
});
