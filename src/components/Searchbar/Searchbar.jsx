import React, { useEffect, useRef, useState } from 'react';
import {
  SearchbarWrap,
  SearchbarLeft,
  CategoryBtn,
  //
  SearchbarRight,
  CustomSearchBox,
  //
  HitContainer,
  HitLink,
  HitWrap,
  HitLeft,
  HitRight,
  HitImage,
  HitP,
  HitH1,
} from './searchbar.style';
import { FiSearch } from 'react-icons/fi';
import ChevronDown from '../ChevronDown';

import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  Highlight,
  Configure,
} from 'react-instantsearch-hooks-web';
import { useProductsListContext } from '../../context/ProductsListContext';

function Hit({ hit }) {
  return (
    <HitLink to={`/products/${hit.id}`}>
      <HitWrap>
        <HitLeft>
          <HitImage src={hit.images[0]} alt={hit.name} />
        </HitLeft>

        <HitRight>
          <div>
            <HitP>{hit.category}</HitP>
            <HitH1>
              <Highlight attribute="name" hit={hit} />
            </HitH1>
          </div>
          <HitP>${hit.price}</HitP>
        </HitRight>
      </HitWrap>
    </HitLink>
  );
}

const Searchbar = () => {
  const { products } = useProductsListContext();

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
  );

  useEffect(() => {
    let searchableProducts = [];
    products.map(item => {
      const { oldPrice, timestamp, details, id, ...rest } = item;
      return searchableProducts.push({ ...rest, objectID: id, id });
    });

    const sendDataToAlgolia = () => {
      const index = searchClient.initIndex('dev_grocerly');

      index.saveObjects(searchableProducts);
    };
    sendDataToAlgolia();
  }, [searchClient, products]);

  const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
      <>
        <CustomSearchBox
          placeholder="Search for items..."
          onInput={e => setSearchValue(e.target.value)}
        />
        <HitContainer showResults={searchValue.length >= 1}>
          <Hits hitComponent={Hit} />
        </HitContainer>
      </>
    );
  };

  return (
    <SearchbarWrap>
      <SearchbarLeft>
        <CategoryBtn>
          All Categories
          <ChevronDown />
        </CategoryBtn>
        <InstantSearch searchClient={searchClient} indexName="dev_grocerly">
          <Configure hitsPerPage={5} />
          <SearchBox />
        </InstantSearch>
      </SearchbarLeft>
      <SearchbarRight to="/products">
        <FiSearch />
      </SearchbarRight>
    </SearchbarWrap>
  );
};

export default Searchbar;
