import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';
import { TestTube } from 'lucide-react';

describe('<Icon />', () => {
  it('should render an svg icon', () => {
    render(<Icon icon={TestTube} />);

    expect(screen.getByTestId('Icon')).toBeInTheDocument();
  });

  it('should render a hidden text when passed through props', () => {
    render(
      <Icon
        icon={TestTube}
        isIconStandalone
        visuallyHidden="for screen readers only"
      />
    );

    const hiddenText = screen.getByText('for screen readers only');
    expect(hiddenText).toBeInTheDocument();
    expect(hiddenText).toHaveStyle({ width: '1px', height: '1px' });
  });
});
