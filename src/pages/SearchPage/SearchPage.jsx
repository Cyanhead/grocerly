import ChevronDown from '../../components/ChevronDown';
import ProductTile from '../../components/ProductTile';

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
        </SearchResult>
      </SearchPageWrap>
    </SearchPageContainer>
  );
};

export default SearchPage;
