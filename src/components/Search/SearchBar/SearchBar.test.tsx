import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<SearchBar />', () => {
  function renderComponent() {
    renderWithProviders(<SearchBar />, { providers: ['ThemeProvider'] });

    return { searchButton: screen.getByRole('button', { name: /search/i }) };
  }

  it('should render a search icon', () => {
    const { searchButton } = renderComponent();

    expect(searchButton).toBeInTheDocument();
  });

  it('should render a search input when the search icon button is clicked', async () => {
    const { searchButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(searchButton);

    const searchInput = await screen.findByRole('searchbox');

    expect(searchInput).toBeInTheDocument();
  });
});
