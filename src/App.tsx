import { Footer, NavBar, ScrollToAnchor } from './components';
import { Outlet } from 'react-router-dom';
import { CartProvider, WishlistProvider } from './context';

function App() {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <NavBar />
          <main>
            <Outlet />
          </main>
        </WishlistProvider>
      </CartProvider>
      <Footer />
      <ScrollToAnchor />
    </>
  );
}

export default App;
