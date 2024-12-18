import { screen } from '@testing-library/react';
import AuthForm from './AuthForm';
import { renderWithProviders } from '../../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<AuthForm />', () => {
  const handleSubmit = vi.fn();
  const handleChange = vi.fn();

  function renderComponent() {
    renderWithProviders(
      <AuthForm
        onSubmit={handleSubmit}
        content={{
          pre: <p>Go back</p>,
          title: '',
          subheading: <p>Your data is safe.</p>,
          fieldsets: [
            {
              id: 'email',
              label: 'Email Address',
              placeholder: 'e.g. example@mail.com',
              type: 'email',
              required: true,
              value: '',
              onChange: handleChange,
            },
            {
              id: 'name',
              label: 'Name',
              placeholder: 'e.g. John',
              type: 'text',
              required: true,
              value: '',
              onChange: handleChange,
            },
          ],
          button: {
            text: 'Submit',
          },
        }}
      />,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      form: screen.getByRole('form'),
      emailInput: screen.getByRole('textbox', { name: /email/i }),
      nameInput: screen.getByRole('textbox', { name: /name/i }),
      submitButton: screen.getByRole('button', { name: /submit/i }),
    };
  }

  it('should render a form with two input fields and a submit button', () => {
    const { form, emailInput, submitButton, nameInput } = renderComponent();

    expect(form).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should prevent form submission if required fields are empty', async () => {
    const { submitButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalledOnce();
  });
});
