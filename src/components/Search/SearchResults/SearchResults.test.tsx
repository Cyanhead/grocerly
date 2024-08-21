import { screen } from '@testing-library/react';
import SearchResults from './SearchResults';
import { renderWithProviders } from '../../../tests/testUtils';
import { act } from 'react';

const SAMPLE_DATA = [
  {
    id: '1',
    name: 'product1',
    image: '',
    category: 'test',
    price: '99',
  },
  {
    id: '2',
    name: 'product2',
    image: '',
    category: 'test',
    price: '99',
  },
];

describe('<SearchResults />', () => {
  async function renderComponent() {
    await act(async () => {
      renderWithProviders(<SearchResults searchResultList={SAMPLE_DATA} />, {
        providers: ['MemoryRouter', 'ThemeProvider'],
        route: '/',
      });
    });

    return {
      searchResults: screen.getByRole('list'),
      resultItem: screen.getAllByRole('listitem'),
    };
  }

  it('should render a list of items', async () => {
    const { searchResults, resultItem } = await renderComponent();

    expect(searchResults).toBeInTheDocument();
    expect(resultItem.length).toEqual(2);
  });

  it('should not show a list when passed an empty array', async () => {
    await act(async () =>
      renderWithProviders(<SearchResults searchResultList={[]} />, {
        providers: ['MemoryRouter', 'AuthProvider', 'ThemeProvider'],
        route: '/',
      })
    );

    expect(screen.getByText(/no/i)).toBeInTheDocument();
  });
});
