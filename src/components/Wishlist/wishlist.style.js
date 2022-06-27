import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

const medium = props => props.theme.fontWght.medium;

export const WishlistWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 8px 8px 4px;
  margin-right: 20px;
`;

export const WishlistCounterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 16px;
  left: 16px;

  border-radius: 50%;

  padding: 2px;
  background-color: ${white};
`;

export const WishlistCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  width: 12px;
  height: 12px;

  border-radius: inherit;
`;

export const WishCount = styled.p`
  font-size: 11px;
`;

export const WishlistP = styled.p`
  margin-left: 2px;

  font-size: 0.75rem;
  font-weight: ${medium};
`;
