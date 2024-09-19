import { screen } from '@testing-library/react';
import Gallery from './Gallery';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Gallery />', () => {
  function renderComponent() {
    renderWithProviders(<Gallery />, {
      providers: ['ThemeProvider'],
    });

    return {
      gallery: screen.getByRole('Gallery'),
    };
  }

  it('should render Gallery_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { gallery } = renderComponent();

    expect(gallery).toBeInTheDocument();

    // render(<Gallery />);

    // expect(screen.getByRole('Gallery')).toBeInTheDocument();
  });
});
