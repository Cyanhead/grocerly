import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import Modal from './Modal';
import { renderWithProviders } from '../../tests/testUtils';
import userEvent from '@testing-library/user-event';

describe('<Modal />', () => {
  const closeModal = vi.fn();
  function renderComponent() {
    renderWithProviders(
      <Modal closeModal={closeModal}>
        <h1>Sample Modal</h1>
      </Modal>,
      {
        providers: ['ThemeProvider'],
      }
    );

    return {
      heading: screen.getByRole('heading', { name: /sample modal/i }),
      closeButton: screen.getByRole('button', { name: /close/i }),
    };
  }

  it('should render', () => {
    const { heading, closeButton } = renderComponent();
    expect(heading).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('should close the modal on clicking the close button', async () => {
    const { closeButton } = renderComponent();

    const user = userEvent.setup();
    await user.click(closeButton);

    expect(closeModal).toHaveBeenCalled();
  });
});
