import { screen } from '@testing-library/react';
import EditUser from './EditUser';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<EditUser />', () => {
  function renderComponent() {
    renderWithProviders(<EditUser />, {
      providers: ['ThemeProvider'],
    });

    return {
      editUser: screen.getByRole('EditUser'),
    };
  }

  it('should render EditUser_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { editUser } = renderComponent();

    expect(editUser).toBeInTheDocument();

    // render(<EditUser />);

    // expect(screen.getByRole('EditUser')).toBeInTheDocument();
  });
});
