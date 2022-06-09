import styled from 'styled-components';

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};

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
