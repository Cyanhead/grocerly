import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import VisuallyHidden from './VisuallyHidden';

describe('<VisuallyHidden />', () => {
  test('it should mount', () => {
    // Arrange: render the component
    render(<VisuallyHidden />);

    // Act: get the component
    const visuallyHidden = screen.getByTestId('VisuallyHidden');

    // Assert: run checks
    expect(visuallyHidden).toBeInTheDocument();
  });
});
