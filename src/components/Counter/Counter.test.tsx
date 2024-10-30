import { screen } from '@testing-library/react';
import Counter from './Counter';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Counter />', () => {
  function renderComponent() {
    renderWithProviders(<Counter />, {
      providers: ['ThemeProvider'],
    });

    return {
      counter: screen.getByRole('Counter'),
    };
  }

  it('should render Counter_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { counter } = renderComponent();

    expect(counter).toBeInTheDocument();

    // render(<Counter />);

    // expect(screen.getByRole('Counter')).toBeInTheDocument();
  });
});
