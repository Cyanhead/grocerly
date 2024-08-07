import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from './Layout';

describe('<Layout />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<Layout />);

    // Act: get the component
    const layout = screen.getByTestId('Layout');

    // Assert: run checks
    expect(layout).toBeInTheDocument();
  });
});
