import styled from 'styled-components';

const semibold = props => props.theme.fontWght.semibold;

export const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  margin-right: 4px;
`;

export const UserName = styled.p`
  font-weight: ${semibold};
`;
