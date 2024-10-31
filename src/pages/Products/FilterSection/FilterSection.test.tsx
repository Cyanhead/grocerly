import { screen } from '@testing-library/react';
import FilterSection from './FilterSection';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<FilterSection />', () => {
  function renderComponent() {
    renderWithProviders(<FilterSection />, {
      providers: ['ThemeProvider'],
    });

    return {
      filterSection: screen.getByRole('FilterSection'),
    };
  }

  it('should render FilterSection_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { filterSection } = renderComponent();

    expect(filterSection).toBeInTheDocument();

    // render(<FilterSection />);

    // expect(screen.getByRole('FilterSection')).toBeInTheDocument();
  });
});
