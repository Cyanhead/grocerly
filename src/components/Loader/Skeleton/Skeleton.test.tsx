import { screen } from '@testing-library/react';
import Skeleton from './Skeleton';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Skeleton />', () => {
  function renderComponent() {
    renderWithProviders(<Skeleton />, {
      providers: ['ThemeProvider'],
    });

    return {
      skeleton: screen.getByRole('Skeleton'),
    };
  }

  it('should render Skeleton_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { skeleton } = renderComponent();

    expect(skeleton).toBeInTheDocument();

    // render(<Skeleton />);

    // expect(screen.getByRole('Skeleton')).toBeInTheDocument();
  });
});
