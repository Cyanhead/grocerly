import { screen } from '@testing-library/react';
import Gallery from './Gallery';
import { renderWithProviders } from '../../tests/testUtils';
import { GalleryProvider } from './context';

describe('<Gallery />', () => {
  function renderComponent() {
    renderWithProviders(
      <GalleryProvider>
        <Gallery images={[]} />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      previewImage: screen.getByRole('img', { name: /product/i }),
    };
  }

  it('should render', () => {
    const { previewImage } = renderComponent();
    expect(previewImage).toBeInTheDocument();
  });
});
