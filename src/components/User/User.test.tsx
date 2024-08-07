import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import User from './User';

describe('<User />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<User />);

    // Act: get the component
    const user = screen.getByTestId('User');

    // Assert: run checks
    expect(user).toBeInTheDocument();
  });
});
