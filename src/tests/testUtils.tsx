import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

type Providers = 'AuthProvider' | 'ThemeProvider' | 'MemoryRouter';

const providerMap = {
  AuthProvider: AuthProvider,
  ThemeProvider: ThemeProvider,
  MemoryRouter: MemoryRouter,
};

interface RenderWithOptions {
  providers: Providers[];
  route?: string;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { providers, route = '/' }: RenderWithOptions
) => {
  // Set initial route if MemoryRouter is included
  if (providers.includes('MemoryRouter')) {
    window.history.pushState({}, 'Test page', route);
  }

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return providers.reduceRight((child, providerKey) => {
      const ProviderComponent = providerMap[providerKey];
      if (providerKey === 'ThemeProvider') {
        return <ProviderComponent theme={theme}>{child}</ProviderComponent>;
      }
      if (providerKey === 'MemoryRouter') {
        return (
          <ProviderComponent initialEntries={[route]} theme={theme}>
            {child}
          </ProviderComponent>
        );
      }
      return <ProviderComponent theme={theme}>{child}</ProviderComponent>;
    }, children);
  };

  return render(ui, { wrapper: Wrapper });
};
