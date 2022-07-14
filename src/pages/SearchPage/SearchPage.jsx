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
  CategoryP,
} from './search-page.style';

import { useProductsListContext } from '../../context/ProductsListContext';
import { useEffect, useState } from 'react';

import Loading from '../../components/Loading';

const SearchPage = () => {
  const { products } = useProductsListContext();

  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [active, setActive] = useState(true);

  const CategoryGenerator = props => {
    const productCategories = [];
    products.forEach(item => {
      if (!productCategories.includes(item.category)) {
        productCategories.push(item.category);
      }
    });

    const handleCategory = e => {
      if (e.target.innerHTML.toLowerCase() === 'all'.toLowerCase()) {
        setFilteredProducts(products);
        setActive(true);
        setFilterCategory('all');
      } else {
        setFilterCategory(e.target.innerHTML);
        setActive(false);
      }
    };

    const handleSelectValue = e => {
      if (e.target.value.toLowerCase() === 'all'.toLowerCase()) {
        setFilteredProducts(products);
        setFilterCategory('all');
      } else {
        setFilterCategory(e.target.value);
      }
    };

    return (
      <>
        {props.mobile ? (
          <CategorySelect onChange={handleSelectValue}>
            <CategoryOption>all</CategoryOption>
            {productCategories.map((type, i) => {
              return (
                <CategoryOption key={i} value={type}>
                  {type}
                </CategoryOption>
              );
            })}
          </CategorySelect>
        ) : (
          <>
            <CategoryListHeading>category</CategoryListHeading>
            <CategoryListWrap>
              <CategoryP active={active} onClick={handleCategory}>
                all
              </CategoryP>
              {productCategories.map((type, i) => {
                return (
                  <CategoryP
                    key={i}
                    onClick={e => handleCategory(e)}
                    active={filterCategory.toLowerCase() === type.toLowerCase()}
                  >
                    {type}
                  </CategoryP>
                );
              })}
            </CategoryListWrap>
          </>
        )}
      </>
    );
  };

  useEffect(() => {
    if (filterCategory.toLowerCase() === 'all'.toLowerCase()) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category === filterCategory)
      );
    }
  }, [products, filterCategory]);

  const handleSort = e => {
    function compare(a, b) {
      if (e.target.value === 'lowest') {
        return a.price - b.price;
      } else if (e.target.value === 'highest') {
        return b.price - a.price;
      }
    }

    const sortedProducts = [...filteredProducts].sort(compare);
    setFilteredProducts(sortedProducts);
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
              <CategoryGenerator mobile />
              <SortWrap>
                <SortP> Sort by:</SortP>
                <SortButton onChange={handleSort}>
                  <SortOption value="popular">popularity</SortOption>
                  <SortOption value="lowest">lowest price</SortOption>
                  <SortOption value="highest">highest price</SortOption>
                </SortButton>
              </SortWrap>
            </div>
          </RowOne>
          <RowTwo>
            <ResultCount>
              {filteredProducts.length} item
              {filteredProducts.length === 1 ? '' : 's'} found
            </ResultCount>
          </RowTwo>
          {filteredProducts.length !== 0 ? (
            <SearchedProductsGrid>
              {filteredProducts.map(product => {
                return <ProductTile key={product.id} product={product} />;
              })}
            </SearchedProductsGrid>
          ) : (
            <Loading />
          )}
        </SearchResult>
      </SearchPageWrap>
    </SearchPageContainer>
  );
};

export default SearchPage;
