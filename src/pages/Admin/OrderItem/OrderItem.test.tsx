import { screen } from '@testing-library/react';
import OrderItem from './OrderItem';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<OrderItem />', () => {
  function renderComponent() {
    renderWithProviders(<OrderItem />, {
      providers: ['ThemeProvider'],
    });

    return {
      orderItem: screen.getByRole('OrderItem'),
    };
  }

  it('should render OrderItem_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { orderItem } = renderComponent();

    expect(orderItem).toBeInTheDocument();

    // render(<OrderItem />);

    // expect(screen.getByRole('OrderItem')).toBeInTheDocument();
  });
});
