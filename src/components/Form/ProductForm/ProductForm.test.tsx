import { screen } from '@testing-library/react';
import ProductForm from './ProductForm';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<ProductForm />', () => {
  function renderComponent() {
    renderWithProviders(<ProductForm />, {
      providers: ['ThemeProvider'],
    });

    return {
      productForm: screen.getByRole('ProductForm'),
    };
  }

  it('should render ProductForm_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { productForm } = renderComponent();

    expect(productForm).toBeInTheDocument();

    // render(<ProductForm />);

    // expect(screen.getByRole('ProductForm')).toBeInTheDocument();
  });
});
