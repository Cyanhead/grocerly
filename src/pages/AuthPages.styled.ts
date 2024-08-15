import styled from 'styled-components';
import { getBreakpoint, getColor } from '../theme';
import { StyledButton } from '../components/Button/Button.styled';

export const Container = styled.div`
  background-color: ${getColor('white')};
  color: ${getColor('black')};

  width: 100%;
  height: 100vh;
  height: 100dvh;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    justify-content: center;
  }
`;

export const Left = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;

  overflow: hidden;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    position: static;
    flex: 1;
  }
`;

export const AnimationWrapper = styled.div`
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

export const AnimLineBg1 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    ${getColor('primary')} 50%,
    ${getColor('accent')} 50%
  );

  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: 1;
`;

export const AnimLineBg2 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    ${getColor('primary100')} 50%,
    ${getColor('accent')} 50%
  );

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

export const AnimLineBg3 = styled.div`
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    ${getColor('primary')} 50%,
    ${getColor('accent')} 50%
  );

  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: absolute;
  right: -50%;
  top: 0;
  z-index: 1;

  animation-duration: 5s;
`;

export const Right = styled.div`
  z-index: 1;
  width: 100%;

  background-color: transparent;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex: 1;
    position: relative;
    right: 0;
  }
`;

export const LinkButton = styled(StyledButton).attrs({
  $variant: 'normal',
  type: 'button',
})`
  padding: 0;
  display: inline-flex;
  text-decoration: underline;

  color: ${getColor('primary600')};

  &:hover {
    text-decoration: none;
  }
`;

export const P = styled.p``;
