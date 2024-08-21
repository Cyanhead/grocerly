import styled from 'styled-components';
import { getColor } from '../../theme';

export const AnimationWrapper = styled.div`
  position: relative;

  background-color: ${getColor('primary100')};

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

export const AnimCircleBg1 = styled.div`
  animation: drift 7000ms infinite linear;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  left: 30%;
  top: 50%;
  background-color: ${getColor('accent')};
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
`;

export const AnimCircleBg2 = styled.div`
  animation: drift 3000ms infinite linear;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  left: 70%;
  top: 50%;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;

  opacity: 0.5;
  background-color: ${getColor('primary200')};
`;

export const AnimCircleBg3 = styled.div`
  animation: drift 7500ms infinite linear;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  left: 70%;
  top: 50%;
  background: red;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;

  background-color: ${getColor('primary')};
`;
