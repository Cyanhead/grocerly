import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChevronDown from '../../components/ChevronDown';
import ProductTile from '../../components/ProductTile';

import { colRef } from '../../components/Firebase';
import { onSnapshot } from 'firebase/firestore';

import {
  SearchPageContainer,
  SearchPageWrap,
  SearchPageAside,
  SearchResult,
  RowOne,
  RowTwo,
  ResultHeading,
  ResultCount,
  SortButton,
  SearchedProductsGrid,
  //
  CategoryListWrap,
  CategoryListHeading,
  CategoryLink,
  CategoryP,
} from './search-page.style';

const SearchPage = ({ products, setProducts }) => {
  const fetchProducts = () => {
    onSnapshot(colRef, snapshot => {
      let productsList = [];
      snapshot.docs.forEach(doc => {
        productsList.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsList);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const CategoryGenerator = () => {
    const productCategories = [
      { name: 'fruits', url: '' },
      { name: 'vegetables', url: '' },
      { name: 'citrus', url: '' },
      { name: 'melons', url: '' },
      { name: 'etc', url: '' },
    ];

    return (
      <CategoryListWrap>
        <CategoryListHeading>category</CategoryListHeading>
        {productCategories.map((type, index) => {
          return (
            <CategoryLink key={index} href={type.url}>
              <CategoryP> {type.name} </CategoryP>
            </CategoryLink>
          );
        })}
      </CategoryListWrap>
    );
  };

  // const PageControl = () => {
  //   return (
  //     <>
  //       <p>page_control</p>
  //     </>
  //   );
  // };

  return (
    <>
      <Header />
      {/* todo */}
      {/* <BreadCrumb /> */}
      <SearchPageContainer>
        <SearchPageWrap>
          <SearchPageAside>
            <CategoryGenerator />
          </SearchPageAside>
          <SearchResult>
            <RowOne>
              <ResultHeading>buy fresh with grocerly</ResultHeading>
              <SortButton>
                Sort by: popularity <ChevronDown />
              </SortButton>
            </RowOne>
            <RowTwo>
              <ResultCount>
                {products.length} item{products.length === 1 ? '' : 's'} found
              </ResultCount>
            </RowTwo>
            <SearchedProductsGrid>
              {products.length !== 0 ? (
                products.map(product => {
                  return <ProductTile key={product.id} product={product} />;
                })
              ) : (
                <p>Loading...</p>
              )}
            </SearchedProductsGrid>

            {/* todo */}
            {/* <PageControl /> */}
          </SearchResult>
        </SearchPageWrap>
      </SearchPageContainer>
      <Footer />
    </>
  );
};

export default SearchPage;
