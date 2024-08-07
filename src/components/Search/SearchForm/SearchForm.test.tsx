import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm';

describe('<SearchForm />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<SearchForm />);

    // Act: get the component
    const searchForm = screen.getByTestId('SearchForm');

    // Assert: run checks
    expect(searchForm).toBeInTheDocument();
  });
});
