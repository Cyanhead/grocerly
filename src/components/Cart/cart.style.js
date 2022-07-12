import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const white = props => props.theme.color.white;

export const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: ${({ centerCenter }) => (centerCenter ? 'center' : '')};

  background-color: ${white};

  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 2;

  width: 520px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  transition: all 500ms ease-in-out;
  transform: ${({ showCart }) =>
    showCart ? 'translateX(0)' : 'translateX(520px)'};
  opacity: ${({ showCart }) => (showCart ? '1' : '0')};

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    width: 100%;
  } ;
`;

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 16px;
`;

export const CartTopLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
  border: none;
  border-radius: 2px;
  outline: none;

  font-size: 1.25rem;

  transition: 150ms ease-in-out;

  &:hover {
    background-color: #ff000055;
  }
  &:active {
    background-color: #ff000088;
  }
`;

export const EmptyCartButtonSpan = styled.span`
  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    display: none;
  }
`;

export const CartHeading = styled.h2`
  margin: 8px 0;

  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 1.25rem;
  }
`;

export const CartMid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  flex: 1;

  padding: 16px;
`;

export const AddProductsButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  margin: 40px 0;
  padding: 16px;
  border: none;
  outline: none;

  font-size: 1.125rem;
  text-decoration: none;

  border-radius: 2px;

  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${primaryHover};
  }
  &:active {
    background-color: ${primary};
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  height: 100%;
  padding: 16px;
`;

export const CartP = styled.p`
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWght || 'inherit'};
  text-align: ${props => props.textAlign || 'inherit'};
  text-transform: ${props => props.textTrans || 'capitalize'};
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  padding: 16px 0;

  background-color: #eeeeee88;

  overflow-y: auto;
`;

export const CartItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${white};

  margin: 8px 0;
  padding: 8px;

  border-radius: 2px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    margin: 0 4px;
  }
`;

export const CartItemLeft = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  margin-right: 8px;
`;

export const ItemImg = styled.img`
  width: 120px;
  height: auto;

  margin-right: 12px;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    width: 100px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 150px;
  height: 100%;
`;

export const CartItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;
`;

export const CartBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 16px;
`;

export const CartRow = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir || 'row'};
  justify-content: ${props => props.justCont || 'space-between'};
  align-items: center;

  margin: 8px 0;
`;

export const CheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  margin-top: 8px;
  padding: 16px;
  border: none;
  outline: none;

  font-size: 1.125rem;

  border-radius: 2px;

  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${primaryHover};
  }
  &:active {
    background-color: ${primary};
  }
`;
