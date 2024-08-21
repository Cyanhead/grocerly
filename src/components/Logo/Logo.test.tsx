import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Logo from './Logo';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Logo />', () => {
  function renderComponent() {
    renderWithProviders(<Logo />, { providers: ['MemoryRouter'], route: '/' });

    return {
      image: screen.getByRole('img', { name: /logo/i }),
      link: screen.getByRole('link', { name: /logo/i }),
    };
  }

  it('should render a logo image', () => {
    const { image, link } = renderComponent();

    expect(image).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
