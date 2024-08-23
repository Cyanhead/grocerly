import { screen } from '@testing-library/react';
import SubscribeForm from './SubscribeForm';
import { renderWithProviders } from '../../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<SubscribeForm />', () => {
  function renderComponent() {
    renderWithProviders(<SubscribeForm />, {
      providers: ['ThemeProvider'],
    });

    return {
      subscribeForm: screen.getByRole('form', { name: /subscribe/i }),
      emailInput: screen.getByRole('textbox', { name: /email/i }),
      submitButton: screen.getByRole('button', { name: /subscribe/i }),
    };
  }

  it('should render an input field and a submit button', () => {
    const { subscribeForm, emailInput, submitButton } = renderComponent();

    expect(subscribeForm).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should prevent form submission if required fields are empty', async () => {
    const { subscribeForm, submitButton } = renderComponent();
    const handleSubmit = vi.fn();

    subscribeForm.onsubmit = handleSubmit;

    const user = userEvent.setup();
    await user.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
