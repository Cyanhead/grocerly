import { screen } from '@testing-library/react';
import PasswordResetForm from './PasswordResetForm';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<PasswordResetForm />', () => {
  function renderComponent() {
    renderWithProviders(<PasswordResetForm />, {
      providers: ['ThemeProvider', 'MemoryRouter'],
    });

    return {
      form: screen.getByRole('form'),
      heading: screen.getByRole('heading'),
      emailInput: screen.getByRole('textbox'),
      submitButton: screen.getByRole('button', { name: /reset/i }),
      backLink: screen.getByRole('link', { name: /back/i }),
    };
  }

  it('should render a password reset form', () => {
    const { form, heading, emailInput, submitButton, backLink } =
      renderComponent();

    expect(form).toBeInTheDocument();
    expect(heading).toHaveTextContent(/reset/i);
    expect(submitButton).toBeInTheDocument();
    expect(backLink).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
