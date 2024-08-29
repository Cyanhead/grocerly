import { screen } from '@testing-library/react';
import Labels from './Labels';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Labels />', () => {
  function renderComponent() {
    renderWithProviders(<Labels />, {
      providers: ['ThemeProvider'],
    });

    return {
      labels: screen.getAllByRole('presentation'),
    };
  }

  it('should render 3 presentational label images', () => {
    const { labels } = renderComponent();
    expect(labels).toHaveLength(3);
  });
});
