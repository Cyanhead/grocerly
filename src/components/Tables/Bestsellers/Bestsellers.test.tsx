import { screen } from '@testing-library/react';
import Bestsellers from './Bestsellers';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Bestsellers />', () => {
  function renderComponent() {
    renderWithProviders(<Bestsellers />, {
      providers: ['ThemeProvider'],
    });

    return {
      bestsellers: screen.getByRole('Bestsellers'),
    };
  }

  it('should render Bestsellers_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { bestsellers } = renderComponent();

    expect(bestsellers).toBeInTheDocument();

    // render(<Bestsellers />);

    // expect(screen.getByRole('Bestsellers')).toBeInTheDocument();
  });
});
