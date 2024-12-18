import { screen } from '@testing-library/react';
import AuthNavBar from './AuthNavBar';
import { renderWithProviders } from '../../../tests/testUtils';

describe('<AuthNavBar />', () => {
  it('should render a nav bar with a logo and a link to the sign-up page', () => {
    renderWithProviders(<AuthNavBar type="login" />, {
      providers: ['MemoryRouter', 'ThemeProvider'],
    });

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign/i })).toBeInTheDocument();
  });

  it('should render a link to the login page', () => {
    renderWithProviders(<AuthNavBar type="sign-up" />, {
      providers: ['MemoryRouter', 'ThemeProvider'],
    });

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
  });
});
