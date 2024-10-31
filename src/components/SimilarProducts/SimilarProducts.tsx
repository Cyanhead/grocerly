import { SimilarProductsPropsType } from './SimilarProducts.type';
import { Wrapper } from './SimilarProducts.styled';
import { useGetProducts } from '../../hooks';
import { Loader, ProductCard, SectionHeading } from '..';
import { Grid } from '../../pages/Products/ProductList/ProductList.styled';

function SimilarProducts({
  excludedProductId,
  category,
}: SimilarProductsPropsType) {
  const { isLoading, data: products = [], error } = useGetProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading similar products: {error.message}</div>;
  }

  const categorizedProducts = products.filter(
    product => product.category === category
  );

  const filteredProducts = categorizedProducts
    .filter(product => product.id !== excludedProductId)
    .slice(0, 5);

  if (filteredProducts.length === 0) {
    return (
      <Wrapper>
        <SectionHeading>Similar Products</SectionHeading>
        <p>No similar products found</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-testid="SimilarProducts">
      <SectionHeading>Similar Products</SectionHeading>
      <Grid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default SimilarProducts;
