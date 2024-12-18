import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import IconButton from './IconButton';
import { TestTube } from 'lucide-react';
import { renderWithProviders } from '../../tests/testUtils';

describe('<IconButton />', () => {
  it('should render an icon button when only icon passed', () => {
    renderWithProviders(<IconButton icon={TestTube} />, {
      providers: ['ThemeProvider'],
    });

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should additionally render a visually-hidden text passed through props', () => {
    const hiddenText = 'for screen readers only';
    renderWithProviders(
      <IconButton icon={TestTube} visuallyHidden={hiddenText} />,
      {
        providers: ['ThemeProvider'],
      }
    );

    expect(
      screen.getByRole('button', { name: hiddenText })
    ).toBeInTheDocument();
  });
});
