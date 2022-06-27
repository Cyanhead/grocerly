import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const black = props => props.theme.color.black;
const white = props => props.theme.color.white;

const medium = props => props.theme.fontWght.medium;
const semibold = props => props.theme.fontWght.semibold;

export const FooterContainer = styled.div`
  width: 100%;

  background-color: ${white};
  color: ${black};
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 72px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ColHead = styled.p`
  margin-bottom: 36px;

  font-size: 1.5rem;
  font-weight: ${semibold};
  text-transform: capitalize;
`;

export const ColBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: ${props => props.mar || '0'};
`;

export const ColLink = styled.a`
  color: inherit;

  width: 100%;
  margin: ${props => props.mar || '0'};

  &:last-child {
    margin-bottom: 0;
  }

  text-decoration: none;

  &:hover {
    color: ${primary};
  }
`;

export const FooterP = styled.p`
  margin: ${props => props.mar || '0'};

  font-weight: ${props => props.fontWght || medium};
  text-transform: ${props => props.textTrans || 'capitalize'};
`;

export const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 40px 0;
`;

export const Copyright = styled.div``;

export const PaymentImg = styled.img`
  height: 32px;
  width: auto;
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: -16px;
`;

export const SocialLink = styled.a``;
