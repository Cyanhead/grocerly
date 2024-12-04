import { screen } from '@testing-library/react';
import Card from './Card';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<Card />', () => {
  function renderComponent() {
    renderWithProviders(<Card />, {
      providers: ['ThemeProvider'],
    });

    return {
      card: screen.getByRole('Card'),
    };
  }

  it('should render Card_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { card } = renderComponent();

    expect(card).toBeInTheDocument();

    // render(<Card />);

    // expect(screen.getByRole('Card')).toBeInTheDocument();
  });
});
