import { screen } from '@testing-library/react';
import Admin from './Admin';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Admin />', () => {
  function renderComponent() {
    renderWithProviders(<Admin />, {
      providers: ['ThemeProvider'],
    });

    return {
      admin: screen.getByRole('Admin'),
    };
  }

  it('should render Admin_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { admin } = renderComponent();

    expect(admin).toBeInTheDocument();

    // render(<Admin />);

    // expect(screen.getByRole('Admin')).toBeInTheDocument();
  });
});
