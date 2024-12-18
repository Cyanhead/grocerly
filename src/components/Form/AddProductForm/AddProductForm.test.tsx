import { screen } from '@testing-library/react';
import AddProductForm from './AddProductForm';
import { renderWithProviders } from '../../../tests/testUtils';
import { GalleryProvider } from '../../Gallery/context';

describe('<AddProductForm />', () => {
  function renderComponent() {
    renderWithProviders(
      <GalleryProvider>
        <AddProductForm
          closeFormModal={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      addProductForm: screen.getByRole('form', { name: /product/i }),
    };
  }

  it('should render AddProductForm_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { addProductForm } = renderComponent();

    expect(addProductForm).toBeInTheDocument();
  });
});
