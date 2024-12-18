import { screen } from '@testing-library/react';
import ProductCategorySelect from './ProductCategorySelect';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<ProductCategorySelect />', () => {
  function renderComponent() {
    renderWithProviders(<ProductCategorySelect />, {
      providers: ['ThemeProvider'],
    });

    return {
      productCategorySelect: screen.getByRole('ProductCategorySelect'),
    };
  }

  it('should render ProductCategorySelect_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { productCategorySelect } = renderComponent();

    expect(productCategorySelect).toBeInTheDocument();

    // render(<ProductCategorySelect />);

    // expect(screen.getByRole('ProductCategorySelect')).toBeInTheDocument();
  });
});
