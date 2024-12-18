import { screen } from '@testing-library/react';
import UploadProductsFromFile from './UploadProductsFromFile';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<UploadProductsFromFile />', () => {
  function renderComponent() {
    renderWithProviders(<UploadProductsFromFile />, {
      providers: ['ThemeProvider'],
    });

    return {
      uploadProductsFromFile: screen.getByRole('UploadProductsFromFile'),
    };
  }

  it('should render UploadProductsFromFile_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { uploadProductsFromFile } = renderComponent();

    expect(uploadProductsFromFile).toBeInTheDocument();

    // render(<UploadProductsFromFile />);

    // expect(screen.getByRole('UploadProductsFromFile')).toBeInTheDocument();
  });
});
