import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render', () => {
    render(<Modal closeModal={() => {}}>Sample Modal</Modal>);

    expect(screen.getByText('Sample Modal')).toBeInTheDocument();
  });
});
