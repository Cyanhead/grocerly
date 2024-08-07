import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<Button />);

    // Act: get the component
    const button = screen.getByTestId('Button');

    // Assert: run checks
    expect(button).toBeInTheDocument();
  });
});
