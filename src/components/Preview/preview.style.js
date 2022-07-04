import styled from 'styled-components';

const primary = props => props.theme.color.primary;

const bold = props => props.theme.fontWght.bold;
const semibold = props => props.theme.fontWght.semibold;

export const PreviewContainer = styled.div`
  width: 100%;
`;

export const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0 24px 0;
`;

export const PreviewTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 36px;
`;

export const PreviewHeading = styled.h2`
  font-weight: ${semibold};
  text-transform: capitalize;
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Category = styled.p`
  color: ${({ green }) => (green ? primary : 'inherit')};

  margin-right: 20px;

  font-weight: ${bold};
  text-transform: capitalize;

  cursor: pointer;

  &:hover {
    color: ${primary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const PreviewBottom = styled.div`
  display: flex;

  position: relative;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f2f3f4;

  width: 50px;
  height: 50px;
  margin: auto;
  padding: 4px;
  border-radius: 50%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '0px'};
  right: ${props => props.direction === 'right' && '0px'};

  z-index: 10;

  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
  &:active {
    background-color: ${props => props.theme.color.greyActive};
  }
`;
