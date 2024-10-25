import { screen } from '@testing-library/react';
import Filters from './Filters';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Filters />', () => {
  function renderComponent() {
    renderWithProviders(<Filters />, {
      providers: ['ThemeProvider'],
    });

    return {
      filters: screen.getByRole('Filters'),
    };
  }

  it('should render Filters_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { filters } = renderComponent();

    expect(filters).toBeInTheDocument();

    // render(<Filters />);

    // expect(screen.getByRole('Filters')).toBeInTheDocument();
  });
});
