import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('<Logo />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<Logo />);

    // Act: get the component
    const logo = screen.getByTestId('Logo');

    // Assert: run checks
    expect(logo).toBeInTheDocument();
  });
});
