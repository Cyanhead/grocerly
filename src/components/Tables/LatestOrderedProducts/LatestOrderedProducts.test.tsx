import { screen } from '@testing-library/react';
import LatestOrderedProducts from './LatestOrderedProducts';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<LatestOrders />', () => {
  function renderComponent() {
    renderWithProviders(<LatestOrderedProducts />, {
      providers: ['ThemeProvider'],
    });

    return {
      latestOrders: screen.getByRole('LatestOrders'),
    };
  }

  it('should render LatestOrders_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { latestOrders } = renderComponent();

    expect(latestOrders).toBeInTheDocument();

    // render(<LatestOrders />);

    // expect(screen.getByRole('LatestOrders')).toBeInTheDocument();
  });
});
