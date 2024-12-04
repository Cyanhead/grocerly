import { ProductListPropsType } from './ProductList.type';
import {
  Container,
  LeftColumn,
  GridWrapper,
  Header,
  Heading,
  P,
  Wrapper,
  Group,
  Select,
  Option,
  SelectGroup,
  MobileCategories,
  Grid,
} from './ProductList.styled';
import { useState } from 'react';
import { ProductCard } from '../../../components';
import { useGetCategories } from '../../../hooks';
import Filters from '../Filters';

function ProductList({ allProducts }: ProductListPropsType) {
  const [products, setProducts] = useState(allProducts);
  const { data: categories, error } = useGetCategories(); // CONSIDER: passing loading and error too
  const allCategories = ['all', ...(categories ?? [])];

  if (error) {
    console.error(error);
  }

  function handleFilter(filterKey: string) {
    if (filterKey === 'all') {
      setProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter(
      product => product.category === filterKey
    );

    setProducts(filteredProducts);
  }

  type SortKey = 'price-low' | 'price-high' | 'rating' | 'popular';
  function handleSort(sortKey: SortKey) {
    const productsClone = structuredClone(products);

    switch (sortKey) {
      case 'price-low':
        productsClone.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        productsClone.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        productsClone.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        setProducts(allProducts);
        break;
    }

    if (sortKey !== 'popular') {
      setProducts(productsClone);
    }
  }

  return (
    <Container data-testid="Products">
      <Wrapper>
        <LeftColumn>
          <Filters categories={allCategories} handleFilter={handleFilter} />
        </LeftColumn>
        <GridWrapper>
          <Header>
            <Heading>
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </Heading>

            <SelectGroup>
              <MobileCategories>
                <P> Category:</P>
                {!categories && <P>Error fetching categories!</P>}
                {categories && (
                  <Select onChange={e => handleFilter(e.target.value)}>
                    {allCategories.map((category, index) => (
                      <Option key={index} value={category}>
                        {category}
                      </Option>
                    ))}
                  </Select>
                )}
              </MobileCategories>
              <Group>
                <P> Sort by:</P>
                <Select onChange={e => handleSort(e.target.value as SortKey)}>
                  <Option value="popular">popularity</Option>
                  <Option value="price-low">lowest price</Option>
                  <Option value="price-high">highest price</Option>
                  {/* <Option value="rating">product rating</Option> */}
                </Select>
              </Group>
            </SelectGroup>
          </Header>

          <Grid>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </GridWrapper>
      </Wrapper>
    </Container>
  );
}

export default ProductList;
