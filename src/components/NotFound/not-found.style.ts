import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100%;
`;

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1200px;
  height: 70vh;
  margin: 0 auto;
  padding: 48px;
`;

export const NotFoundImg = styled.img`
  width: 400px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    width: 100%;
  }
`;

export const NotFoundText = styled.h2`
  margin-top: 40px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    font-size: 1.25rem;
  }
`;
