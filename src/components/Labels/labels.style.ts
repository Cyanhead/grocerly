import styled from 'styled-components';

export const LabelContainer = styled.div`
  width: 100%;
`;

export const LabelWrap = styled.div`
  display: flex;

  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 28px 24px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LabelImgWrap = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const LabelImg = styled.img`
  width: 100%;
  height: auto;
`;
