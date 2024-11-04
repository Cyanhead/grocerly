import { Footer, NavBar, ScrollToAnchor } from './components';
import { Outlet } from 'react-router-dom';
import { WishlistProvider } from './context';

function App() {
  return (
    <>
      <WishlistProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </WishlistProvider>
      <Footer />
      <ScrollToAnchor />
    </>
  );
}

export default App;
