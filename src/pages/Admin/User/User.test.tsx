import { screen } from '@testing-library/react';
import User from './User';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<User />', () => {
  function renderComponent() {
    renderWithProviders(<User />, {
      providers: ['ThemeProvider'],
    });

    return {
      user: screen.getByRole('User'),
    };
  }

  it('should render User_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { user } = renderComponent();

    expect(user).toBeInTheDocument();

    // render(<User />);

    // expect(screen.getByRole('User')).toBeInTheDocument();
  });
});
