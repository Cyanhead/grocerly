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
import Header from './components/Header';
import Footer from './components/Footer';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  const MajorRoutes = () => {
    return (
      <>
        <Header />

        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/products"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route index element={<SearchPage />} />
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/addproducts" element={<AddProduct />} />

          <Route path="*" element={<div>nothing to see here</div>} />
        </Routes>

        <Footer />
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="*" element={<MajorRoutes />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
