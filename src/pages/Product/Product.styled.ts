import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { BaseContainer, BaseWrapper } from '../../components';
import { StyledButton } from '../../components/Button/Button.styled';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;

  width: 100%;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
  }
`;

export const Images = styled.div`
  flex: 2;
`;

export const Details = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.h2`
  text-transform: capitalize;
`;

export const Category = styled.p`
  text-transform: capitalize;
  font-weight: ${getFontWeight('medium')};
`;

export const OtherName = styled.span`
  font-weight: ${getFontWeight('regular')};
`;

export const Brief = styled.p`
  border-top: ${getColor('faintLine')};
  margin: 8px 0;
  padding-top: 8px;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: ${getFontWeight('bold')};
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 16px;
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;
`;

export const OldPrice = styled.p`
  color: grey;

  font-weight: ${getFontWeight('medium')};

  text-decoration: line-through;
`;

export const Percentage = styled.p`
  background-color: ${getColor('primary50')};
  color: ${getColor('primary700')};

  padding: 4px 8px;
  margin-left: 16px;

  font-weight: ${getFontWeight('medium')};
`;

export const BuyButton = styled(StyledButton)`
  justify-content: center;
`;

export const Contact = styled.div`
  margin-top: 20px;
  padding-top: 8px;
  border-top: ${getColor('faintLine')};
`;

export const Offer = styled.p``;

export const Specifications = styled.p``;
