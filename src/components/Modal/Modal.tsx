import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalPropsType } from './Modal.type';
import { CloseButtonWrapper, Container, Wrapper } from './Modal.styled';
import { X } from 'lucide-react';
import Icon from '../Icon';

const Modal = ({ children = 'empty modal', closeModal }: ModalPropsType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElement = useRef<HTMLElement | null>(null);
  const lastFocusableElement = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const closeModalOnEscKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeModalOnEscKeyPress);

    return () => {
      window.removeEventListener('keydown', closeModalOnEscKeyPress);
    };
  }, [closeModal]);

  // Disable scrolling when modal is open and enable it when modal is closed
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    return () => {
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  }, []);

  // Trap focus within the modal
  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    const focusableElements = modalRef.current?.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length > 0) {
      firstFocusableElement.current = focusableElements[0];
      lastFocusableElement.current =
        focusableElements[focusableElements.length - 1];

      firstFocusableElement.current?.focus();
    }

    const handleFocus = (event: FocusEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        event.stopPropagation();
        firstFocusableElement.current?.focus();
      }
    };

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusableElement.current) {
            lastFocusableElement.current?.focus();
            event.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusableElement.current) {
            firstFocusableElement.current?.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('focus', handleFocus, true);
    window.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('focus', handleFocus, true);
      window.removeEventListener('keydown', handleTabKey);
      // Return focus to the previous active element when the modal is closed
      previousActiveElement.current?.focus();
    };
  }, []);

  const handleClickOutsideOfModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Container
      onClick={handleClickOutsideOfModal}
      role="dialog"
      aria-modal="true"
    >
      <Wrapper ref={modalRef} tabIndex={-1}>
        <CloseButtonWrapper onClick={closeModal}>
          <Icon
            icon={X}
            size={32}
            visuallyHidden="close modal"
            isIconStandalone
          />
        </CloseButtonWrapper>
        {children}
      </Wrapper>
    </Container>,
    document.body
  );
};

export default Modal;
