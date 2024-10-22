import styled from 'styled-components';
import { getColor } from '../../theme';
import { StyledButton } from '../Button/Button.styled';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px;
  padding: 40px;
  border-radius: 2px;
  border: 2px solid ${getColor('grey')};
  background-color: ${getColor('white')};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
`;

export const CloseButtonWrapper = styled(StyledButton).attrs({
  $variant: 'ghost',
})`
  position: absolute;
  top: 0;
  right: 0;
`;
