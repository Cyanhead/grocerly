import { screen } from '@testing-library/react';
import NotFound from './NotFound';
import { renderWithProviders } from '../../tests/testUtils';

describe('<NotFound />', () => {
  function renderComponent() {
    renderWithProviders(<NotFound />, {
      providers: ['ThemeProvider'],
    });

    return {
      notFound: screen.getByRole('NotFound'),
    };
  }

  it('should render NotFound_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { notFound } = renderComponent();

    expect(notFound).toBeInTheDocument();

    // render(<NotFound />);

    // expect(screen.getByRole('NotFound')).toBeInTheDocument();
  });
});
