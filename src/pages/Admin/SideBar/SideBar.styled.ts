import styled from 'styled-components';
import { getColor, getFontWeight } from '../../../theme';

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;

  padding: 16px 0;

  min-width: 283px;
  width: 283px;

  flex-direction: column;

  transition: 300ms ease-in-out;

  height: 100vh;

  overflow-y: auto;

  border-right: ${getColor('faintLine')};
`;

export const SectionTitle = styled.p`
  margin-left: 16px;

  text-transform: uppercase;
  font-weight: ${getFontWeight('bold')};
  font-size: calc(12 / 16 * 1rem);
`;
