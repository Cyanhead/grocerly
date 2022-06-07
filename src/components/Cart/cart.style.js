import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

export const CartWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 8px 8px 4px;

  border: 1px solid black;
`;

export const CartCounterWrap = styled.div`
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

export const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  width: 12px;
  height: 12px;

  border-radius: inherit;
`;

export const CartCount = styled.p`
  font-size: 11px;
`;

export const CartText = styled.div``;

export const CartP = styled.p`
  /* margin-left: 2px; */
`;
