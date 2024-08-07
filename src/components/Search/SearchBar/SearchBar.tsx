import { useRef, useState } from 'react';
import { SearchIconButton, SearchInput, Wrapper } from './SearchBar.styled';
import { Search } from 'lucide-react';
import { SEARCH_RESULTS } from '../SAMPLE_DATA';
import SearchResults from '../SearchResults';
import { useClickOutside, useSearchItemList } from '../../../hooks';

function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const results = useSearchItemList(searchTerm, SEARCH_RESULTS);

  const searchButtonRef = useRef(null);
  const searchBarRef = useRef(null);

  useClickOutside([searchButtonRef, searchBarRef], () =>
    setShowSearchBar(false)
  );
  return (
    <>
      <SearchIconButton
        ref={searchButtonRef}
        icon={Search}
        data-testid="Search Button"
        onClick={() => setShowSearchBar(!showSearchBar)}
        type="submit"
        visuallyHidden="Search for products"
      />
      {showSearchBar && (
        <Wrapper ref={searchBarRef}>
          <SearchInput
            data-testid="Mobile Search Input"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm.length !== 0 && (
            <SearchResults searchResultList={results} />
          )}
        </Wrapper>
      )}
    </>
  );
}

export default SearchBar;

// const DUMMY_DATA = [
//   {
//     localId: Math.random().toString(36).substring(7),
//     name: 'green pepper',
//     otherNames: [],
//     category: 'Vegetable',
//     price: 10,
//     oldPrice: 20,
//     brief: 'green pepper is popularly used in salads',
//     details: `green pepper is popularly used in salads, stir-fries, and other dishes. It is also a great source of vitamin C and vitamin A, as well as other nutrients like vitamin E, vitamin B6, folate, and vitamin K. Additionally, it is low in calories and packed with antioxidants.`,
//     timestamp: 'serverTimestamp()',
//   },
//   {
//     localId: Math.random().toString(36).substring(7),
//     name: 'lemongrass',
//     otherNames: [],
//     category: 'Vegetable',
//     price: 20,
//     oldPrice: 30,
//     brief: 'lemongrass is used in teas, soups, and curries',
//     details: `lemongrass is used in teas, soups, and curries. It is also suitable for poultry, fish, beef, and seafood. It is also a great source of vitamin A, vitamin C, folate, magnesium, zinc, copper, iron, potassium, phosphorus, calcium, and manganese. Additionally, it is low in calories and packed with antioxidants.`,
//     timestamp: 'serverTimestamp()',
//   },
//   {
//     localId: Math.random().toString(36).substring(7),
//     name: 'lime',
//     otherNames: [],
//     category: 'Fruit',
//     price: 30,
//     oldPrice: 40,
//     brief: 'lime is a great source of vitamin C',
//     details: `limes are a popular ingredient in drinks, desserts, and marinades. They are also a great source of vitamin C, vitamin B6, potassium, folate, magnesium, and thiamine. Additionally, they are low in calories and packed with antioxidants.`,
//     timestamp: 'serverTimestamp()',
//   },
// ];
