import styled from 'styled-components';

export const ChevronDownWrap = styled.div`
  display: flex;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  }

  transform: ${({ trigger }) => (trigger ? 'rotate(180deg)' : 'rotate(0)')};
  transition: 150ms;
`;
