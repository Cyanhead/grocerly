import { Error, Loader, SectionHeading2 } from '../../components';
import { useGetProducts } from '../../hooks';
import ProductList from './ProductList';

function Products() {
  const { isLoading, data: products = [], error } = useGetProducts();

  if (isLoading) {
    return <Loader fullscreen />;
  }

  if (error) {
    console.error(error);

    return (
      <Error>
        <SectionHeading2>
          Error getting products: {error?.message}
        </SectionHeading2>
      </Error>
    );
  }

  if (!products.length) {
    return (
      <Error>
        <SectionHeading2>No products found!</SectionHeading2>
      </Error>
    );
  }

  return <ProductList allProducts={products} />;
}

export default Products;
