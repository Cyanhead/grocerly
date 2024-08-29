import { Footer, NavBar, ScrollToAnchor } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToAnchor />
    </>
  );
}

export default App;
