import styled from 'styled-components';

export const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.color.white};

  width: 100%;
  min-height: ${props => props.minH || '80vh'};
  max-height: 100%;
  padding: 48px;
`;

export const LoadingImg = styled.img`
  width: 150px;
  height: auto;

  opacity: 0.6;

  animation: spinner 1.5s infinite linear;

  @keyframes spinner {
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

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    width: 100px;
  }
`;
