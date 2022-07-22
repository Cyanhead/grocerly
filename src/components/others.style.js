import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;
const greyHover = props => props.theme.color.greyHover;
const greyActive = props => props.theme.color.greyActive;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${props => props.alignSelf || ''};

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

  font-size: ${props => props.fontSize || '1.25rem'};

  cursor: ${props => props.cursor || ''};

  &:hover {
    background-color: ${props => props.bgHover || 'inherit'};
    color: ${props => props.fgHover || 'inherit'};
  }

  &:active {
    background-color: ${props => props.bgActive || 'inherit'};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    padding: ${props => props.mobilePad || ''};
  } ;
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

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    display: flex;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    padding: ${props => props.padMid || ''};
  }
`;

export const GreenSpan = styled.span`
  color: ${primary};

  font-weight: ${props => props.fontWght || ''};
`;

export const Disabler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ disabled }) => (disabled ? '0.5' : '')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
`;

export const MobileIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  padding: 8px;

  cursor: pointer;

  border-radius: 50%;

  &:hover {
    background-color: ${greyHover};
  }

  &:active {
    background-color: ${greyActive};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    display: flex;
  }
`;
