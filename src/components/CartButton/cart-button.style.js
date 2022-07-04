import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

const medium = props => props.theme.fontWght.medium;

export const CartButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 8px 8px 4px;

  border-radius: 3px;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.color.greyHover};
  }
  &:active {
    background-color: ${props => props.theme.color.greyActive};
  }
`;

export const CartButtonCounterWrap = styled.div`
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

export const CartButtonCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  width: 12px;
  height: 12px;

  border-radius: inherit;
`;

export const CartButtonCount = styled.p`
  font-size: 11px;
`;

export const CartButtonText = styled.div``;

export const CartButtonP = styled.p`
  font-size: 0.75rem;
  font-weight: ${medium};
`;
