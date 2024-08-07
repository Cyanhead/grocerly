import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from './Icon';

describe('<Icon />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<Icon />);

    // Act: get the component
    const icon = screen.getByTestId('Icon');

    // Assert: run checks
    expect(icon).toBeInTheDocument();
  });
});
