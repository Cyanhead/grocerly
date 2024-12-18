import { screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../tests/testUtils';
import { act } from 'react';

describe('<LoginForm />', () => {
  async function renderComponent() {
    await act(async () =>
      renderWithProviders(<LoginForm />, {
        providers: ['ThemeProvider', 'AuthProvider', 'MemoryRouter'],
      })
    );

    return {
      form: screen.getByRole('form'),
      heading: screen.getByRole('heading'),
      emailInput: screen.getByRole('textbox', { name: /email/i }),
      // passwordInput: screen.getByRole('textbox', { name: /password/i }), // TODO
      submitButton: screen.getByRole('button', { name: /log/i }),
      forgotPasswordLink: screen.getByRole('link', { name: /click/i }),
    };
  }

  it('should render a login form', async () => {
    const { form, heading, emailInput, submitButton, forgotPasswordLink } =
      await renderComponent();

    expect(form).toBeInTheDocument();
    expect(heading).toHaveTextContent(/log/i);
    expect(submitButton).toBeInTheDocument();
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });
});
