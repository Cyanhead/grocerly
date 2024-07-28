import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const white = props => props.theme.color.white;

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  max-width: 500px;
  width: 100%;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    background-color: ${white};

    padding: 20px;
    border-radius: 10px;

    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const FormText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  margin-bottom: 20px;
`;

export const FormH1 = styled.h1`
  font-family: 'Days One', sans-serif;

  font-weight: ${medium};

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 1.5rem;
  }
`;

export const FormP = styled.p`
  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const FormAltSignup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  position: ${({ revealType }) => (revealType ? 'relative' : 'inherit')};
  bottom: ${({ revealType }) => (revealType ? '92px' : 'unset')};

  margin-bottom: 16px;

  font-size: 1rem;

  transform: ${({ revealType, reveal }) =>
    revealType ? (reveal ? 'translateY(92px)' : 'translateY(0)') : 'auto'};
  transition: ease 200ms;

  z-index: ${({ revealType, reveal }) =>
    revealType ? (reveal ? '1' : '-1') : 'inherit'};
  opacity: ${({ revealType, reveal }) =>
    revealType ? (reveal ? '1' : '0') : 'inherit'};
`;

export const FormLabel = styled.label`
  color: ${primary};

  margin-bottom: 4px;

  font-weight: ${medium};

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const FormInput = styled.input`
  height: 48px;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.grey};

  transition: all 300ms;

  &:hover {
    border: 1px solid ${primary};
  }
  &:focus {
    border: 1px solid ${primary};
    outline: none;
    border-right: 20px solid ${primary};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const PromptMessage = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;

  color: red;

  padding: 4px 0;

  font-weight: ${semibold};
`;

export const PromptP = styled.p``;

export const FormButton = styled.button`
  background-color: ${primary};
  color: ${white};

  width: 100%;
  margin: 16px 0;
  padding: 16px;
  border-radius: 5px;
  border: none;
  outline: none;

  font-weight: ${semibold};

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);

  cursor: pointer;

  position: ${({ revealType }) => (revealType ? 'relative' : 'inherit')};
  bottom: ${({ revealType }) => (revealType ? '92px' : 'unset')};

  transform: ${({ revealType, reveal }) =>
    revealType ? (reveal ? 'translateY(92px)' : 'translateY(0)') : 'inherit'};
  transition: ease 200ms;

  &:hover {
    background-color: ${primaryHover};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    margin-bottom: ${({ revealType, reveal }) =>
      revealType ? (reveal ? '' : '-80px') : ''};
  }
`;
