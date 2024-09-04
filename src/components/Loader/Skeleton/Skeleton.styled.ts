import styled, { keyframes } from 'styled-components';
import { getBreakpoint } from '../../../theme';

export const Container = styled.div`
  width: 100%;

  @media (min-width: ${getBreakpoint('md')}) {
    width: 50%;
  }
  @media (min-width: ${getBreakpoint('lg')}) {
    width: 25%;
  }
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const shineLoadingImage = keyframes`
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
`;

export const LoadingImage = styled.div`
  height: 190px;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #f4f4f4 40px,
    #ececec 80px
  );
  background-size: 250px;
  animation: ${shineLoadingImage} 2s infinite ease-out;
`;

export const LoadingContent = styled.div.attrs<{
  $width?: string;
  $height?: string;
}>(props => ({
  $width: props.$width || '100%',
  $height: props.$height || '100%',
}))`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background: #f7f7f7;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingTextContainer = styled.div`
  flex-basis: 100%;
`;

const shineLoadingContainerItems = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
`;

export const LoadingMainText = styled.div`
  height: 10px;
  width: 65%;
  margin-bottom: 10px;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  animation: ${shineLoadingContainerItems} 2s infinite ease-out;
`;

export const LoadingSubText = styled.div.attrs<{
  $width?: string;
  $height?: string;
}>(props => ({
  $width: props.$width || '50%',
  $height: props.$height || '10px',
}))`
  width: ${props => props.$width};
  height: ${props => props.$height};
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  animation: ${shineLoadingContainerItems} 2s infinite ease-out;
`;

export const LoadingBtn = styled.div`
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 3px;
  animation: ${shineLoadingContainerItems} 2s infinite ease-out;
`;
