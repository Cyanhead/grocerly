import { useRef, useState } from 'react';
import { SearchInput, Wrapper } from './SearchForm.styled';
import { Search } from 'lucide-react';
import IconButton from '../../IconButton';
import SearchResults from '../SearchResults';
import { SEARCH_RESULTS } from '../SAMPLE_DATA';
import { useClickOutside, useSearchItemList } from '../../../hooks';
// import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef(null);
  // const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Should go to search page'); // TODO

    // const url = `/products?name=${searchTerm}`;
    // navigate(url);
  }

  const results = useSearchItemList(searchTerm, SEARCH_RESULTS);
  useClickOutside([resultsRef], () => setShowResults(false));
  return (
    <Wrapper
      onSubmit={handleSubmit}
      data-testid="SearchForm"
      aria-label="search-form"
    >
      <SearchInput
        type="search"
        data-testid="Search Input"
        name="search input"
        aria-label="search input"
        placeholder="Search for products..."
        $bg="#f3f3f3"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onFocus={() => setShowResults(true)}
        required
      />
      <IconButton
        icon={Search}
        visuallyHidden="Search for products"
        $variant="primary"
        type="submit"
      />
      {searchTerm.length !== 0 && showResults && (
        <SearchResults searchResultList={results} ref={resultsRef} />
      )}
    </Wrapper>
  );
}

export default SearchForm;
