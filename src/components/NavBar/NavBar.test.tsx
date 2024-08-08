import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<NavBar />);

    // Act: get the component
    const navBar = screen.getByTestId('NavBar');

    // Assert: run checks
    expect(navBar).toBeInTheDocument();
  });
});
