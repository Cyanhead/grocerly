import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Button from './Button';
import { renderWithProviders } from '../../tests/testUtils';

describe('<Button />', () => {
  it('should render a primary button when no passed props', () => {
    renderWithProviders(<Button>Sample</Button>, {
      providers: ['ThemeProvider'],
    });

    const button = screen.getByRole('button', { name: 'Sample' });

    expect(button).toHaveStyle({ color: 'rgb(255, 255, 255)', border: 'none' });
  });

  it('should delegate all passed props to the rendered button', () => {
    renderWithProviders(
      <Button id="test-button" $variant="secondary">
        Sample
      </Button>,
      {
        providers: ['ThemeProvider'],
      }
    );

    const button = screen.getByRole('button', { name: 'Sample' });

    expect(button).toHaveAttribute('id', 'test-button');
    expect(button).toHaveStyle({
      color: 'rgb(42, 135, 93)',
      border: '2px solid #2a875d',
    });
  });
});
