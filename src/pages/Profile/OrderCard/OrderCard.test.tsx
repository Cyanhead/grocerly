import { screen } from '@testing-library/react';
import OrderCard from './OrderCard';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<OrderCard />', () => {
  function renderComponent() {
    renderWithProviders(<OrderCard />, {
      providers: ['ThemeProvider'],
    });

    return {
      orderCard: screen.getByRole('OrderCard'),
    };
  }

  it('should render OrderCard_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { orderCard } = renderComponent();

    expect(orderCard).toBeInTheDocument();

    // render(<OrderCard />);

    // expect(screen.getByRole('OrderCard')).toBeInTheDocument();
  });
});
