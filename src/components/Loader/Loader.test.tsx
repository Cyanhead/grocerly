import { screen } from '@testing-library/react';
import Loader from './Loader';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Loader />', () => {
  function renderComponent() {
    renderWithProviders(<Loader />, {
      providers: ['ThemeProvider'],
    });

    return {
      loader: screen.getByRole('img', { name: /load/i }),
    };
  }

  it('should render', () => {
    const { loader } = renderComponent();

    expect(loader).toBeInTheDocument();
  });

  it('should be animated', () => {
    const { loader } = renderComponent();

    expect(loader).toHaveStyle({ animation: 'pulse 1.5s infinite linear' });
  });
});
