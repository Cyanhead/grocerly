import { screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import { renderWithProviders } from '../../../tests/testUtils';
import userEvent from '@testing-library/user-event';
import { act } from 'react';

describe('<SearchForm />', () => {
  async function renderComponent() {
    await act(async () =>
      renderWithProviders(<SearchForm />, {
        providers: ['ThemeProvider', 'AuthProvider', 'MemoryRouter'],
      })
    );

    return {
      form: screen.getByRole('form', { name: /search/i }),
      searchInput: screen.getByRole('searchbox'),
      searchButton: screen.getByRole('button', { name: /search/i }),
    };
  }

  const handleSubmit = vi.fn();

  it('should render a text input and button', async () => {
    const { form, searchInput, searchButton } = await renderComponent();

    expect(form).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should prevent form submission if text field is empty', async () => {
    const { form, searchButton } = await renderComponent();
    form.onsubmit = handleSubmit;

    const user = userEvent.setup();
    await user.click(searchButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('should submit form if text field is not empty', async () => {
    const { form, searchInput, searchButton } = await renderComponent();
    form.onsubmit = handleSubmit;

    const user = userEvent.setup();
    await user.type(searchInput, 'item');
    await user.click(searchButton);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
