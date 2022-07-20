import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const accent = props => props.theme.color.accent;
const white = props => props.theme.color.white;
const black = props => props.theme.color.black;

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const SignupPageContainer = styled.div`
  background-color: ${white};
  color: ${black};

  width: 100%;
  height: 100vh;

  position: relative;

  a {
    font-family: 'JetBrains Mono', monospace;
    color: ${primary};

    &:hover {
      text-decoration: none;
    }
  }
`;

export const SignupPageWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const SignupLeft = styled.div`
  flex: 1;

  height: 100%;

  overflow: hidden;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const AnimatedBg = styled.div`
  position: relative;

  background-color: ${props => props.theme.color.primaryLite};

  width: 100%;
  height: 100%;

  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;

export const AnimBg1 = styled.div`
  animation: drift 7000ms infinite linear;

  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.7;
  position: absolute;
  left: 30%;
  top: 50%;
  background-color: ${accent};
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
`;

export const AnimBg2 = styled.div`
  animation: drift 3000ms infinite linear;

  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.7;
  position: absolute;
  left: 70%;
  top: 50%;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;

  opacity: 0.5;
  background-color: ${primaryHover};
  position: fixed;
`;

export const AnimBg3 = styled.div`
  animation: drift 7500ms infinite linear;

  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.7;
  position: absolute;
  left: 70%;
  top: 50%;
  background: red;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;

  position: fixed;
  background-color: ${primary};
`;

export const SignupRight = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${white};

  height: 100%;
  padding: 0 24px;

  position: relative;
  right: 0;
  z-index: 1;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    background-color: transparent;
  }
`;

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

export const SignupText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  margin-bottom: 20px;
`;

export const SignupPageH1 = styled.h1`
  /* font-family: 'Lexend', sans-serif; */
  font-family: 'Days One', sans-serif;

  font-weight: ${medium};

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 1.5rem;
  }
`;

export const SignupP = styled.p`
  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const SignupInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  margin-bottom: 16px;

  font-size: 1rem;
`;

export const HiddenSignupInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  position: relative;
  bottom: 92px;

  margin-bottom: 16px;

  font-size: 1rem;

  transform: ${({ reveal }) => (reveal ? 'translateY(92px)' : 'translateY(0)')};
  transition: ease 200ms;

  z-index: ${({ reveal }) => (reveal ? '1' : '-1')};
  opacity: ${({ reveal }) => (reveal ? '1' : '0')};
`;

export const SignupFormLabel = styled.label`
  color: ${primary};

  margin-bottom: 4px;

  font-weight: ${medium};

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const SignupFormInput = styled.input`
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

export const SignupButton = styled.button`
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

  position: relative;
  bottom: 92px;

  transform: ${({ reveal }) => (reveal ? 'translateY(92px)' : 'translateY(0)')};
  transition: ease 200ms;

  &:hover {
    background-color: ${primaryHover};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    margin-bottom: ${({ reveal }) => (reveal ? '' : '-80px')};
  }
`;

export const GoogleSpan = styled.span`
  color: ${primary};

  margin: 0 4px;

  font-family: 'JetBrains Mono', monospace;
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
