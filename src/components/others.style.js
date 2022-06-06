import styled from 'styled-components';

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};
  color: ${props => props.fg || 'inherit'};

  padding: ${props => props.pad || '4px'};
  margin: ${props => props.mar || '0'};
`;
