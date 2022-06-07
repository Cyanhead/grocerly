import styled from 'styled-components';

const primary = props => props.theme.color.primary;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};
  color: ${props => props.fg || 'inherit'};

  padding: ${props => props.pad || '4px'};
  margin: ${props => props.mar || '0'};

  position: ${props => props.pos || ''};

  font-size: ${props => props.fontSize || '1.5rem'};
`;

export const GreenSpan = styled.span`
  color: ${primary};
`;
