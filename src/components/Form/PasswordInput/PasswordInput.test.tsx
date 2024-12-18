import { screen } from '@testing-library/react';
import PasswordInput from './PasswordInput';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<PasswordInput />', () => {
  function renderComponent() {
    const text = 'Sample';

    renderWithProviders(
      <PasswordInput
        id={text}
        label={text}
        placeholder={text}
        type="password"
        required={true}
        value={text}
        onChange={() => {}}
        setIsPasswordValid={() => {}}
      />,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      fieldset: screen.getByRole('group'),
      passwordInput: screen.getByLabelText(/sample/i),
    };
  }

  it('should render a password input', () => {
    const { fieldset, passwordInput } = renderComponent();

    expect(fieldset).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
