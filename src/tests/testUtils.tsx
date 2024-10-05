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

/**
 * Renders given `ui` wrapped in given React Context providers. If `MemoryRouter`
 * is included, sets the initial route to the given `route`.
 *
 * @param ui - The React element to render
 * @param options - Options to customize the rendering
 * @param options.providers - The providers to wrap the `ui`
 * @param [options.route='/'] - The initial route if `MemoryRouter` is
 *   included
 * @returns The return value of `render` plus a `rerender` function
 */

export function renderWithProviders(
  ui: React.ReactElement,
  { providers, route = '/' }: RenderWithOptions
) {
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

  // Render with the wrapper and return everything `render` provides, including `rerender`
  return {
    ...render(ui, { wrapper: Wrapper }),
    rerender: (newUi: React.ReactElement, newOptions?: RenderWithOptions) =>
      renderWithProviders(newUi, {
        providers,
        route: newOptions?.route || route,
      }),
  };
}
