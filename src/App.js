import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.style';
import { theme } from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
