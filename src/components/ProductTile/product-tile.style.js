import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primary = props => props.theme.color.primary;
const grey = props => props.theme.color.grey;

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ProductTileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  padding: 10px;

  border: 1px solid rgba(173, 173, 173, 0.25);

  transition: 150ms ease-in;

  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 210px;
`;

export const ProductInfo = styled.div`
  margin-top: 10px;
`;

export const ProductCategory = styled.p`
  font-size: 0.75rem;
  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 0.625rem;
  }
`;

export const ProductName = styled.p`
  margin: 8px 0 12px 0;

  font-weight: ${semibold};
  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 0.875rem;
  }
`;

export const PurchaseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    flex-direction: column;
    align-items: stretch;
    height: auto;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    align-self: flex-start;

    margin-bottom: 8px;
  }
`;

export const CurrentPrice = styled.p`
  color: ${primary};

  margin-right: 10px;

  font-size: 1.125rem;
  font-weight: ${semibold};
  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 1rem;
  }
`;

export const OldPrice = styled.p`
  color: ${grey};

  font-size: 0.875rem;
  font-weight: ${medium};
  text-decoration: line-through;
  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 0.75rem;
  }
`;
