import { screen } from '@testing-library/react';
import EditProductForm from './EditProductForm';
import { renderWithProviders } from '../../../tests/testUtils';
import { products } from '../../../tests/samples';
import { GalleryProvider } from '../../Gallery/context';

describe('<EditProductForm />', () => {
  function renderComponent() {
    renderWithProviders(
      <GalleryProvider>
        <EditProductForm
          product={products[0]}
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
      editProductForm: screen.getByRole('form', { name: /product/i }),
    };
  }

  it('should render', () => {
    const { editProductForm } = renderComponent();

    expect(editProductForm).toBeInTheDocument();
  });
});
