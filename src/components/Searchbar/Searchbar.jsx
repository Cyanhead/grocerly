import React, { useEffect, useRef, useState } from 'react';
import {
  SearchbarWrap,
  SearchbarLeft,
  //
  SearchbarRight,
  CustomSearchBox,
  //
  HitContainer,
  HitContainerTop,
  HitLink,
  HitWrap,
  HitLeft,
  HitRight,
  HitImage,
  HitP,
  HitH1,
  AlgoliaWatermark,
  AlgoliaLink,
  AlgoliaP,
  AlgoliaLogo,
} from './searchbar.style';
import { FiSearch } from 'react-icons/fi';

import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  Highlight,
  Configure,
} from 'react-instantsearch-hooks-web';
import algolia_logo from '../../assets/images/Algolia-nebula.svg';
import { useProductsListContext } from '../../context/ProductsListContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside.hook';

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

const Searchbar = props => {
  const { products } = useProductsListContext();

  const searchClient = algoliasearch(
    import.meta.env.VITE_ALGOLIA_APP_ID,
    import.meta.env.VITE_ALGOLIA_ADMIN_API_KEY
  );

  useEffect(() => {
    let searchableProducts = [];

    // remove unwanted properties from products
    products?.map(item => {
      const { oldPrice, timestamp, details, id, ...rest } = item;
      return searchableProducts.push({ ...rest, objectID: id, id });
    });

    const sendDataToAlgolia = () => {
      const index = searchClient.initIndex('dev_grocerly');

      // update the 'dev_grocerly' index with the current list of products
      index.replaceAllObjects(searchableProducts);
    };

    sendDataToAlgolia();
  }, [searchClient, products]);

  const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [insideClick, setInsideClick] = useState(true);

    const watermarkRef = useRef(null);
    const clickOutRef = useRef(null);
    useOnClickOutside(clickOutRef, () => setInsideClick(false), watermarkRef);

    const handleInput = value => {
      setSearchValue(value);
      setInsideClick(true);
    };

    return (
      <>
        <CustomSearchBox
          placeholder="Search for items..."
          onInput={e => handleInput(e.target.value)}
        />
        <HitContainer
          showResults={insideClick && searchValue.length >= 1}
          ref={clickOutRef}
        >
          <HitContainerTop>
            <Hits hitComponent={Hit} />
          </HitContainerTop>
          <AlgoliaWatermark ref={watermarkRef}>
            <AlgoliaLink
              href="https://www.algolia.com"
              target="_blank"
              rel="noreferrer"
            >
              <AlgoliaP>Search by</AlgoliaP>
              <AlgoliaLogo src={algolia_logo} alt="algolia_logo" />
            </AlgoliaLink>
          </AlgoliaWatermark>
        </HitContainer>
      </>
    );
  };

  return (
    <SearchbarWrap toggleSearch={props.toggleSearch} mobile={props.mobile}>
      <SearchbarLeft>
        <InstantSearch searchClient={searchClient} indexName="dev_grocerly">
          <Configure hitsPerPage={4} />
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
