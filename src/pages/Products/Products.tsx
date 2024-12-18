import { Error, Loader } from '../../components';
import { useGetProducts } from '../../hooks';
import ProductList from './ProductList';

function Products() {
  const { isLoading, data: products = [], error } = useGetProducts();

  if (isLoading) {
    return <Loader fullscreen />;
  }

  if (error) {
    console.error(error);

    return <Error>Error getting products: {error?.message}.</Error>;
  }

  if (!products.length) {
    return <Error>No products found!</Error>;
  }

  return <ProductList allProducts={products} />;
}

export default Products;
