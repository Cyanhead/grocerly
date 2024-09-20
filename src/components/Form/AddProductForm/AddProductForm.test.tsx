import { screen } from '@testing-library/react';
import AddProductForm from './AddProductForm';
import { renderWithProviders } from '../../tests/testUtils';

describe('<AddProductForm />', () => {
  function renderComponent() {
    renderWithProviders(<AddProductForm />, {
      providers: ['ThemeProvider'],
    });

    return {
      addProductForm: screen.getByRole('AddProductForm'),
    };
  }

  it('should render AddProductForm_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { addProductForm } = renderComponent();

    expect(addProductForm).toBeInTheDocument();

    // render(<AddProductForm />);

    // expect(screen.getByRole('AddProductForm')).toBeInTheDocument();
  });
});
