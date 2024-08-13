import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Input from './Input';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Input />', () => {
  it('should render an input when no props are passed', () => {
    renderWithProviders(<Input />, {
      providers: ['ThemeProvider'],
    });

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  const name = 'text-field';

  it('should delegate all passed props to the input element', () => {
    renderWithProviders(<Input id="test" aria-label={name} />, {
      providers: ['ThemeProvider'],
    });

    expect(screen.getByRole('textbox', { name })).toBeInTheDocument();
  });
});
