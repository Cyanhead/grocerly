import { screen } from '@testing-library/react';
import AdminWarning from './AdminWarning';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<AdminWarning />', () => {
  function renderComponent() {
    renderWithProviders(<AdminWarning setShouldProceed={() => {}} />, {
      providers: ['ThemeProvider'],
    });

    return {
      adminWarning: screen.getByRole('AdminWarning'),
    };
  }

  it('should render AdminWarning_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { adminWarning } = renderComponent();

    expect(adminWarning).toBeInTheDocument();
  });
});
