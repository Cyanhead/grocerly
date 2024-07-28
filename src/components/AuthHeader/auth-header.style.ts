import styled from 'styled-components';

export const AuthHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.color.white};

  position: absolute;
  top: 0;
  z-index: 2;

  width: 100%;
  padding: 16px 24px;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const AuthHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthHeaderP = styled.p`
  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  }
`;
