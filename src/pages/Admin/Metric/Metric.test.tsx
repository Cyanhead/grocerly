import { screen } from '@testing-library/react';
import Metric from './Metric';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Metric />', () => {
  function renderComponent() {
    renderWithProviders(<Metric name="Sample" value={101} />, {
      providers: ['ThemeProvider'],
    });

    return {
      metric: screen.getByRole('heading', { name: '101' }),
    };
  }

  it('should render Metric_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { metric } = renderComponent();

    expect(metric).toBeInTheDocument();
  });
});
