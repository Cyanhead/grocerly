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
import ChevronDown from '../ChevronDown';

import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  Highlight,
  Configure,
} from 'react-instantsearch-hooks-web';
import algolia_logo from '../../assets/images/Algolia-nebula.svg';
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

const Searchbar = props => {
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
    const [insideClick, setInsideClick] = useState(true);

    const watermarkRef = useRef(null);

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    function useOutsideAlerter(ref) {
      useEffect(() => {
        /**
         * Action to do if clicked on outside of element
         */
        function handleClickOutside(event) {

       
          if (
            ref.current &&
            !ref.current.contains(event.target) &&
            !watermarkRef.current.contains(event.target)
          ) {

            setInsideClick(false);
          }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref]);
    }

    /**
     * Component that alerts if you click outside of it
     */
    function OutsideAlerter(props) {
      const wrapperRef = useRef(null);
      useOutsideAlerter(wrapperRef);

      return <div ref={wrapperRef}>{props.children}</div>;
    }

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
        <HitContainer showResults={insideClick && searchValue.length >= 1}>
          <HitContainerTop>
            <OutsideAlerter>
              <Hits hitComponent={Hit} />
            </OutsideAlerter>
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
