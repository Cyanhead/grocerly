import styled from 'styled-components';

const primary = props => props.theme.color.primary;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: ${props => props.pos || ''};

  background-color: ${props => props.bg || 'inherit'};
  color: ${props => props.fg || 'inherit'};

  margin: ${props => props.mar || '0'};
  padding: ${props => props.pad || '4px'};
  border: ${props => props.bord || ''};
  border-radius: ${props => props.bordR || 'inherit'};

  font-size: ${props => props.fontSize || '1.5rem'};
`;

export const GreenSpan = styled.span`
  color: ${primary};
`;
