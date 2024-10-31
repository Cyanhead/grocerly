import { screen } from '@testing-library/react';
import SimilarProducts from './SimilarProducts';
import { renderWithProviders } from '../../tests/testUtils';

describe('<SimilarProducts />', () => {
  function renderComponent() {
    renderWithProviders(<SimilarProducts />, {
      providers: ['ThemeProvider'],
    });

    return {
      similarProducts: screen.getByRole('SimilarProducts'),
    };
  }

  it('should render SimilarProducts_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { similarProducts } = renderComponent();

    expect(similarProducts).toBeInTheDocument();

    // render(<SimilarProducts />);

    // expect(screen.getByRole('SimilarProducts')).toBeInTheDocument();
  });
});
