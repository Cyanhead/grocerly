import { screen } from '@testing-library/react';
import GalleryEditor from './GalleryEditor';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<GalleryEditor />', () => {
  function renderComponent() {
    renderWithProviders(<GalleryEditor />, {
      providers: ['ThemeProvider'],
    });

    return {
      galleryEditor: screen.getByRole('GalleryEditor'),
    };
  }

  it('should render GalleryEditor_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { galleryEditor } = renderComponent();

    expect(galleryEditor).toBeInTheDocument();

    // render(<GalleryEditor />);

    // expect(screen.getByRole('GalleryEditor')).toBeInTheDocument();
  });
});
