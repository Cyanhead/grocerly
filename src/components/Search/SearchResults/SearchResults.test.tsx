import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResults from './SearchResults';

describe('<SearchResults />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<SearchResults />);

    // Act: get the component
    const searchResults = screen.getByTestId('SearchResults');

    // Assert: run checks
    expect(searchResults).toBeInTheDocument();
  });
});
