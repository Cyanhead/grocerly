import styled from 'styled-components';
import { getColor } from '../../theme';
import { BaseWrapper } from '../BaseStyled';

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${getColor('white')};

  width: 100%;
  height: 100%;
`;

export const FullScreenWrapper = styled(Wrapper)`
  width: 100vw;
  height: 100vh;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;

  opacity: 0.5;

  animation: pulse 1.5s infinite linear;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
