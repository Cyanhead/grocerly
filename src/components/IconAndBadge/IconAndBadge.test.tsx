import { screen } from '@testing-library/react';
import IconAndBadge from './IconAndBadge';
import { renderWithProviders } from '../../tests/testUtils';

describe('<IconAndBadge />', () => {
  function renderComponent() {
    renderWithProviders(<IconAndBadge />, {
      providers: ['ThemeProvider'],
    });

    return {
      iconAndBadge: screen.getByRole('IconAndBadge'),
    };
  }

  it('should render IconAndBadge_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { iconAndBadge } = renderComponent();

    expect(iconAndBadge).toBeInTheDocument();

    // render(<IconAndBadge />);

    // expect(screen.getByRole('IconAndBadge')).toBeInTheDocument();
  });
});
