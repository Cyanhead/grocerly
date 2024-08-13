import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import CartButton from './CartButton';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<CartButton />', () => {
  function renderComponent() {
    renderWithProviders(<CartButton />, {
      providers: ['ThemeProvider'],
    });

    return {
      cartButton: screen.getByRole('button', { name: /cart/i }),
    };
  }

  it('should render the cart button', () => {
    const { cartButton } = renderComponent();

    expect(cartButton).toBeInTheDocument();
  });
});
