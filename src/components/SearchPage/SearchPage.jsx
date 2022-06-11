import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ChevronDown from '../ChevronDown';

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
import ProductTile from '../ProductTile';

const SearchPage = () => {
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
        {productCategories.map((type, i) => {
          return (
            <CategoryLink key={i} href={type.url}>
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
              <ResultCount> 4353 items found </ResultCount>
            </RowTwo>
            <SearchedProductsGrid>
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
              <ProductTile />
            </SearchedProductsGrid>

            {/* <PageControl /> */}
          </SearchResult>
        </SearchPageWrap>
      </SearchPageContainer>
      <Footer />
    </>
  );
};

export default SearchPage;
