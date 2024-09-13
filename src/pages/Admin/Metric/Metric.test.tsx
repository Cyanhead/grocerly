import { screen } from '@testing-library/react';
import Metric from './Metric';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Metric />', () => {
  function renderComponent() {
    renderWithProviders(<Metric />, {
      providers: ['ThemeProvider'],
    });

    return {
      metric: screen.getByRole('Metric'),
    };
  }

  it('should render Metric_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { metric } = renderComponent();

    expect(metric).toBeInTheDocument();

    // render(<Metric />);

    // expect(screen.getByRole('Metric')).toBeInTheDocument();
  });
});
