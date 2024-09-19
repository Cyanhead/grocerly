import { screen } from '@testing-library/react';
import GalleryViewer from './GalleryViewer';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<GalleryViewer />', () => {
  function renderComponent() {
    renderWithProviders(<GalleryViewer />, {
      providers: ['ThemeProvider'],
    });

    return {
      galleryViewer: screen.getByRole('GalleryViewer'),
    };
  }

  it('should render GalleryViewer_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { galleryViewer } = renderComponent();

    expect(galleryViewer).toBeInTheDocument();

    // render(<GalleryViewer />);

    // expect(screen.getByRole('GalleryViewer')).toBeInTheDocument();
  });
});
