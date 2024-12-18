import { screen } from '@testing-library/react';
import OtherNamesInput from './OtherNamesInput';
import { renderWithProviders } from '../../../../tests/testUtils';

describe('<OtherNamesInput />', () => {
  function renderComponent() {
    renderWithProviders(<OtherNamesInput />, {
      providers: ['ThemeProvider'],
    });

    return {
      otherNamesInput: screen.getByRole('OtherNamesInput'),
    };
  }

  it('should render OtherNamesInput_CHANGE_THIS_TO_EXPECTED_DEFAULT_BEHAVIOR', () => {
    const { otherNamesInput } = renderComponent();

    expect(otherNamesInput).toBeInTheDocument();

    // render(<OtherNamesInput />);

    // expect(screen.getByRole('OtherNamesInput')).toBeInTheDocument();
  });
});
