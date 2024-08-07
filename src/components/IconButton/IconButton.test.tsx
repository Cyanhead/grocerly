import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<IconButton />);

    // Act: get the component
    const iconButton = screen.getByTestId('IconButton');

    // Assert: run checks
    expect(iconButton).toBeInTheDocument();
  });
});
