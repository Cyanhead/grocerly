import { screen } from '@testing-library/react';
import ProductFormInput from './ProductFormInput';
import { renderWithProviders } from '../../tests/testUtils';

describe('<ProductFormInput />', () => {
  function renderComponent() {
    renderWithProviders(<ProductFormInput />, {
      providers: ['ThemeProvider'],
    });

    return {
      productFormInput: screen.getByRole('ProductFormInput'),
    };
  }

  it('should render ProductFormInput_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { productFormInput } = renderComponent();

    expect(productFormInput).toBeInTheDocument();

    // render(<ProductFormInput />);

    // expect(screen.getByRole('ProductFormInput')).toBeInTheDocument();
  });
});
