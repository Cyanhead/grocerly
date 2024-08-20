import { NavBar, ScrollToAnchor } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
      <ScrollToAnchor />
    </>
  );
}

export default App;
