import { screen } from '@testing-library/react';
import Details from './Details';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<Details />', () => {
  function renderComponent() {
    renderWithProviders(<Details />, {
      providers: ['ThemeProvider'],
    });

    return {
      details: screen.getByRole('Details'),
    };
  }

  it('should render Details_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { details } = renderComponent();

    expect(details).toBeInTheDocument();

    // render(<Details />);

    // expect(screen.getByRole('Details')).toBeInTheDocument();
  });
});
