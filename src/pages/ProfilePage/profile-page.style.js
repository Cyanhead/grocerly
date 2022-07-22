import styled from 'styled-components';

const white = props => props.theme.color.white;
const greyBg1 = props => props.theme.color.greyBg1;
const greyBg2 = props => props.theme.color.greyBg2;

const faintLine = props => props.theme.color.faintLine;

export const ProfilePageContainer = styled.div`
  background-color: ${greyBg1};

  width: 100%;
`;

export const ProfilePageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;

  column-gap: 16px;
`;

export const ProfilePageAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  flex: 1;

  max-height: 500px;

  background-color: ${white};

  max-width: 250px;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const ProfilePageTabGroup = styled.div``;

export const ProfilePageTab = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ active }) => (active ? greyBg2 : 'inherit')};

  width: 100%;
  padding: 12px 16px;
  border: none;
  outline: none;

  transition: ease 200ms;

  &:hover {
    background-color: ${greyBg2};
  }
`;

export const ProfilePageMain = styled.div`
  flex: 1;

  background-color: ${white};

  min-height: 60vh;
  padding: 16px 24px;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const ProfilePageHeading = styled.h2`
  border-bottom: ${faintLine};
`;

export const ProfilePageContent = styled.div`
  padding: 16px 0;
`;

export const ProfilePageP = styled.p`
  margin: ${props => props.mar || ''};

  font-weight: ${props => props.fontWght || ''};
`;

export const ProfilePageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  gap: 16px;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  justify-content: center;
  align-items: stretch;

  border: ${faintLine};

  flex: 1;
`;

export const CellTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 16px;
  border-bottom: ${faintLine};

  font-weight: ${props => props.theme.fontWght.medium};
  text-transform: uppercase;
`;

export const CellBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  flex: 1;

  padding: 16px;
`;

export const CellButton = styled.button`
  background-color: inherit;
  color: ${props => props.theme.color.primary};

  padding: 8px 16px;
  border: none;
  border-top: ${faintLine};
  outline: none;

  font-weight: ${props => props.theme.fontWght.semibold};
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.color.primaryLite};
  }
`;

export const BackBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 8px 0;
`;
