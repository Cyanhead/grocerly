import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.style';
import { theme } from './theme';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';

import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  // todo: create add products component

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route index element={<HomePage />} />
          <Route
            path="/products"
            element={
              <>
                <Link to="/addproducts">Add Products</Link>
                <Outlet />
              </>
            }
          >
            <Route
              // path="search"
              index
              element={
                <SearchPage products={products} setProducts={setProducts} />
              }
            />
            <Route
              path=":productId"
              element={<ProductPage products={products} />}
            />
          </Route>
          <Route path="/addproducts" element={<AddProduct />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
