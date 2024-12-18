import { screen } from '@testing-library/react';
import Categories from './Categories';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Categories />', () => {
  function renderComponent() {
    renderWithProviders(<Categories />, {
      providers: ['ThemeProvider'],
    });

    return {
      categories: screen.getByRole('Categories'),
    };
  }

  it('should render Categories_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { categories } = renderComponent();

    expect(categories).toBeInTheDocument();

    // render(<Categories />);

    // expect(screen.getByRole('Categories')).toBeInTheDocument();
  });
});
