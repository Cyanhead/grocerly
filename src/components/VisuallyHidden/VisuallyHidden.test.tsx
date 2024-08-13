import { render, screen } from '@testing-library/react';
import VisuallyHidden from '../../components/VisuallyHidden/VisuallyHidden';

describe('<VisuallyHidden />', () => {
  const renderComponent = () => {
    render(<VisuallyHidden>Hidden</VisuallyHidden>);

    return {
      visuallyHiddenText: screen.getByText(/hidden/i),
    };
  };

  it('should render children text', () => {
    const { visuallyHiddenText } = renderComponent();

    expect(visuallyHiddenText).toBeInTheDocument();
  });

  it('it should be styled correctly to be hidden', () => {
    const { visuallyHiddenText } = renderComponent();

    expect(visuallyHiddenText).toHaveStyle({
      display: 'inline-block',
      position: 'absolute',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      'clip-path': 'inset(50%)',
      height: '1px',
      width: '1px',
      margin: '-1',
      padding: '0',
      border: '0',
    });
  });
});
