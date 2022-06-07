import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global.style';
import { theme } from './theme';

import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
