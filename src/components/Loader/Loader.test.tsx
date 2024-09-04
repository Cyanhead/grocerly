import { screen } from '@testing-library/react';
import Loader from './Loader';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Loader />', () => {
  function renderComponent() {
    renderWithProviders(<Loader />, {
      providers: ['ThemeProvider'],
    });

    return {
      loader: screen.getByRole('Loader'),
    };
  }

  it('should render Loader_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { loader } = renderComponent();

    expect(loader).toBeInTheDocument();

    // render(<Loader />);

    // expect(screen.getByRole('Loader')).toBeInTheDocument();
  });
});
