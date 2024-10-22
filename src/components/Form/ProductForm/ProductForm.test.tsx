import { screen } from '@testing-library/react';
import { ProductFormPropsType } from './ProductForm.type';
import {
  NewProductStateType,
  NewProductType,
} from '../AddProductForm/AddProductForm.type';
import { ExistingProductStateType } from '../EditProductForm/EditProductForm.type';
import { renderWithProviders } from '../../../tests/testUtils';
import { GalleryProvider } from '../../Gallery/context';
import ProductForm from './ProductForm';

describe('<ProductForm />', () => {
  const defaultNewProductProps: ProductFormPropsType<NewProductType> = {
    onSubmit: vi.fn(),
    state: {
      name: '',
      otherNames: [],
      category: '',
      about: '',
      price: 0,
      images: [],
      stock: 10,
    },
    stateSetter: vi.fn(),
    status: 'idle',
    button: {
      text: 'Submit',
      loadingText: 'Loading...',
    },
  };

  const defaultExistingProductsProps: ProductFormPropsType<ExistingProductStateType> =
    {
      onSubmit: vi.fn(),
      state: {
        id: '',
        name: '',
        otherNames: [],
        category: '',
        about: '',
        price: 0,
        images: [],
      },
      stateSetter: vi.fn(),
      status: 'idle',
      button: {
        text: 'Submit',
        loadingText: 'Loading...',
      },
    };

  it('renders with default props', () => {
    renderWithProviders(
      <GalleryProvider>
        <ProductForm {...defaultNewProductProps} />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(screen.getByRole('heading', { name: /Add/i })).toBeInTheDocument();
  });

  it('renders with existing product', () => {
    const existingProduct: ExistingProductStateType = {
      id: '1',
      name: 'Existing Product',
      otherNames: ['Existing Product 1', 'Existing Product 2'],
      category: 'Existing Category',
      about: 'Existing product description',
      price: 10,
      images: [
        {
          id: 'id',
          largeURL: 'large_image',
          smallURL: 'small_image',
          thumbnailURL: 'thumbnail_image',
        },
      ],
    };

    renderWithProviders(
      <GalleryProvider>
        <ProductForm
          {...defaultExistingProductsProps}
          state={existingProduct}
        />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(
      screen.getByText(`Edit ${existingProduct.name}`)
    ).toBeInTheDocument();
  });

  it('renders with new product', () => {
    const newProduct: NewProductStateType = {
      name: 'New Product',
      otherNames: [],
      category: '',
      about: '',
      price: 2,
      images: [],
      stock: 1,
    };

    renderWithProviders(
      <GalleryProvider>
        <ProductForm {...defaultNewProductProps} state={newProduct} />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(screen.getByText('Add New Product')).toBeInTheDocument();
  });

  it('renders ProductFormInput components', () => {
    renderWithProviders(
      <GalleryProvider>
        <ProductForm {...defaultNewProductProps} />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Other Names')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
  });

  it('disables SubmitButton when loading', () => {
    renderWithProviders(
      <GalleryProvider>
        <ProductForm {...defaultNewProductProps} status="loading" />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeDisabled();
  });

  it('renders children prop', () => {
    const children = <div>Children content</div>;

    renderWithProviders(
      <GalleryProvider>
        <ProductForm {...defaultNewProductProps} children={children} />
      </GalleryProvider>,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(screen.getByText('Children content')).toBeInTheDocument();
  });
});
