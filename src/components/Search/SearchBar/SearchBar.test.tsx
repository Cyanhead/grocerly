import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<SearchBar />);

    // Act: get the component
    const searchBar = screen.getByTestId('SearchBar');

    // Assert: run checks
    expect(searchBar).toBeInTheDocument();
  });
});
