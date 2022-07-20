import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const accent = props => props.theme.color.accent;
const white = props => props.theme.color.white;
const black = props => props.theme.color.black;

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
