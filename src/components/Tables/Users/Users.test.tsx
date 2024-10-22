import { screen } from '@testing-library/react';
import Users from './Users';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Users />', () => {
  function renderComponent() {
    renderWithProviders(<Users />, {
      providers: ['ThemeProvider'],
    });

    return {
      users: screen.getByRole('Users'),
    };
  }

  it('should render Users_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { users } = renderComponent();

    expect(users).toBeInTheDocument();

    // render(<Users />);

    // expect(screen.getByRole('Users')).toBeInTheDocument();
  });
});
