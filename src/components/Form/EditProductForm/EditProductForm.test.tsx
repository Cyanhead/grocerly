import { screen } from '@testing-library/react';
import EditProductForm from './EditProductForm';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<EditProductForm />', () => {
  function renderComponent() {
    renderWithProviders(<EditProductForm />, {
      providers: ['ThemeProvider'],
    });

    return {
      editProductForm: screen.getByRole('EditProductForm'),
    };
  }

  it('should render EditProductForm_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { editProductForm } = renderComponent();

    expect(editProductForm).toBeInTheDocument();

    // render(<EditProductForm />);

    // expect(screen.getByRole('EditProductForm')).toBeInTheDocument();
  });
});
