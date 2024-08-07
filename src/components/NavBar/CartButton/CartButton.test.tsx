import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartButton from './CartButton';

describe('<CartButton />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<CartButton />);

    // Act: get the component
    const cartButton = screen.getByTestId('CartButton');

    // Assert: run checks
    expect(cartButton).toBeInTheDocument();
  });
});
