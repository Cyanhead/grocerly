import styled from 'styled-components';

const primaryLite = props => props.theme.color.primaryLite;

const white = props => props.theme.color.white;
const grey = props => props.theme.color.grey;
const greyHover = props => props.theme.color.greyHover;
const greyActive = props => props.theme.color.greyActive;

const semibold = props => props.theme.fontWght.semibold;

export const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${({ showMenu }) => (showMenu ? greyHover : 'inherit')};

  min-width: 136px;
  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${greyHover};
  }

  &:active {
    background-color: ${greyActive};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    justify-content: center;

    min-width: unset;
  }
`;

export const UserLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex: 1;
`;

export const UserPhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  margin-right: 8px;
`;

export const UserName = styled.p`
  font-weight: ${semibold};

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    display: none;
  }
`;

export const MenuWrap = styled.ul`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  position: absolute;
  top: 56px;
  left: 0;
  z-index: 12;

  background-color: ${white};

  width: 100%;

  list-style: none;

  border: 1px solid ${grey};

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    top: 72px;
  }
`;

export const MenuItem = styled.li`
  display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  align-items: center;

  padding: 8px;

  &:hover {
    background-color: ${primaryLite};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.large}) {
    display: flex;
  }
`;

export const MenuItemP = styled.p`
  margin-left: 8px;

  font-size: 0.875rem;
  font-weight: ${props => props.theme.fontWght.medium};
`;
