import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

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
  border-top: ${props => props.bordT || ''};
  border-right: ${props => props.bordR || ''};
  border-bottom: ${props => props.bordB || ''};
  border-left: ${props => props.bordL || ''};
  border-radius: ${props => props.bordRad || 'inherit'};

  font-size: ${props => props.fontSize || '1.5rem'};

  &:hover {
    background-color: ${props => props.bgHover || 'inherit'};
  }

  &:active {
    background-color: ${props => props.bgActive || 'inherit'};
  }
`;

export const ColoredBtn = styled.button`
  display: ${({ visibility }) => (visibility ? visibility : 'flex')};
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || primary};
  color: ${props => props.fg || white};

  margin: ${props => props.mar || '0'};
  padding: ${props => props.pad || '4px'};
  border: none;
  outline: none;
  border-radius: ${props => props.bordRad || 'inherit'};

  font-size: ${props => props.fontSize || '1rem'};

  cursor: ${props => (props.cursor ? 'pointer' : '')};

  transition: 150ms ease-in;

  &:hover {
    background-color: ${props => props.bgHover || 'inherit'};
    color: ${props => props.fgHover || white};
  }
`;

export const GreenSpan = styled.span`
  color: ${primary};
`;

export const Disabler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ disabled }) => (disabled ? '0.5' : '')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
`;
