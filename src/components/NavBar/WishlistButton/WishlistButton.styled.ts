import styled from 'styled-components';
import { getColor } from '../../../theme';
import { BaseContainer, BaseWrapper } from '../../BaseStyled';

export const Container = styled(BaseContainer)`
  border: 5px solid ${getColor('primary')}; // DELETE

  /* mobile */

  /* breakpoints */
`;

export const Wrapper = styled(BaseWrapper)`
  border: 5px solid black; // DELETE

  /* mobile */

  /* breakpoints */
`;
