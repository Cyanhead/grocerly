import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('<Input />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<Input />);

    // Act: get the component
    const input = screen.getByTestId('Input');

    // Assert: run checks
    expect(input).toBeInTheDocument();
  });
});
