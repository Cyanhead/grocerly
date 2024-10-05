import { screen } from '@testing-library/react';
import ProductFormInput from './ProductFormInput';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<ProductFormInput />', () => {
  function renderComponent() {
    renderWithProviders(
      <ProductFormInput label="sample" name="sample" value="sample" />,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      productFormInput: screen.getByRole('textbox', { name: 'sample' }),
    };
  }

  it('should render', () => {
    const { productFormInput } = renderComponent();

    expect(productFormInput).toBeInTheDocument();
  });
});
