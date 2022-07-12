import ProductTile from '../../components/ProductTile';

import {
  SearchPageContainer,
  SearchPageWrap,
  SearchPageAside,
  SearchResult,
  RowOne,
  RowTwo,
  ResultHeading,
  CategorySelect,
  CategoryOption,
  SortWrap,
  SortP,
  SortButton,
  SortOption,
  ResultCount,
  SearchedProductsGrid,
  CategoryListWrap,
  CategoryListHeading,
  CategoryLink,
  CategoryP,
} from './search-page.style';

import { useProductsListContext } from '../../context/ProductsListContext';

const SearchPage = () => {
  const { products } = useProductsListContext();

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

  return (
    <SearchPageContainer>
      <SearchPageWrap>
        <SearchPageAside>
          <CategoryGenerator />
        </SearchPageAside>
        <SearchResult>
          <RowOne>
            <ResultHeading>buy fresh with grocerly</ResultHeading>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

                marginTop: '8px',
              }}
            >
              <CategorySelect>
                <CategoryOption>all</CategoryOption>
                <CategoryOption>vegetables</CategoryOption>
                <CategoryOption>fruits</CategoryOption>
              </CategorySelect>
              <SortWrap>
                <SortP> Sort by:</SortP>
                <SortButton>
                  <SortOption>popularity</SortOption>
                  <SortOption>lowest price</SortOption>
                  <SortOption>highest price</SortOption>
                </SortButton>
              </SortWrap>
            </div>
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
        </SearchResult>
      </SearchPageWrap>
    </SearchPageContainer>
  );
};

export default SearchPage;
