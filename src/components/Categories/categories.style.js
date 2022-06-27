import styled from 'styled-components';

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const SlideWrap = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  overflow-x: hidden;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 1s ease;
  transform: translateX(${props => props.sliderIndex * -1200}px);

  min-width: 1200px;
`;

export const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};

  width: 148px;
  height: auto;
  padding: 12px 24px;
`;

export const TileImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const TileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: ${semibold};

  text-transform: capitalize;
`;

export const ProductCount = styled.p`
  font-size: 0.875rem;
  font-weight: ${medium};
`;
