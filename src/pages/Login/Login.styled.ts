import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';

export const ForgotPass = styled.div`
  background-color: ${getColor('white')};

  margin: 8px;
  padding: 20px;
  border-radius: 2px;
  max-width: 576px;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    text-align: center;
    margin: 8px auto;
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
