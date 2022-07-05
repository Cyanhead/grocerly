import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.style';
import { theme } from './theme';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage';
import AddProduct from './pages/AddProduct';

function App() {
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
                <Outlet />
              </>
            }
          >
            <Route
              // path="search"
              index
              element={<SearchPage />}
            />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/addproducts" element={<AddProduct />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
