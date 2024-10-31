import { useState, useEffect } from 'react';
// TODO: modify to take real data
import { SearchResultsType } from '../components/Search/SAMPLE_DATA';

export function useSearchItemList(searchTerm: string, data: SearchResultsType) {
  const [results, setResults] = useState<SearchResultsType>([]);

  useEffect(() => {
    const nextResults = data.filter(item => {
      if (
        item.name.includes(searchTerm) ||
        item.category.includes(searchTerm)
      ) {
        return item;
      }
    });
    setResults(nextResults);
  }, [data, searchTerm]);
  return results;
}
