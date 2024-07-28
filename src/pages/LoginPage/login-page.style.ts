import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const accent = props => props.theme.color.accent;
const white = props => props.theme.color.white;
const black = props => props.theme.color.black;

export const LoginPageContainer = styled.div`
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

export const LoginPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const LoginLeft = styled.div`
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

  width: 100%;
  height: 100%;

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;

export const AnimBg1 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, ${primary} 50%, ${accent} 50%);

  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: 1;
`;

export const AnimBg2 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, ${primaryHover} 50%, ${accent} 50%);

  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: 1;

  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

export const AnimBg3 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, ${primary} 50%, ${accent} 50%);

  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: 1;

  animation-duration: 5s;
`;

export const LoginRight = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
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

export const LoginP = styled.p``;

export const LinkSpan = styled.span`
  color: ${primary};

  margin: 0 4px;

  font-family: 'JetBrains Mono', monospace;
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
