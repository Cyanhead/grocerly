import { screen } from '@testing-library/react';
import Error from './Error';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Error />', () => {
  function renderComponent() {
    renderWithProviders(<Error />, {
      providers: ['ThemeProvider'],
    });

    return {
      error: screen.getByRole('Error'),
    };
  }

  it('should render Error_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { error } = renderComponent();

    expect(error).toBeInTheDocument();

    // render(<Error />);

    // expect(screen.getByRole('Error')).toBeInTheDocument();
  });
});
