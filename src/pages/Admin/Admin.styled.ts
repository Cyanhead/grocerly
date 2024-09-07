import styled from 'styled-components';
import { BaseWrapper, SectionHeading2 } from '../../components';
import { getColor } from '../../theme';

export const Container = styled.div`
  display: flex;
`;

export const Page = styled.main`
  width: 100%;
`;

export const Title = styled(SectionHeading2)`
  text-transform: capitalize;
  margin-left: 40px;
`;

export const Grid = styled(BaseWrapper)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  padding-top: 20px;
`;

export const Cell = styled.div.attrs<{ $span?: number }>(props => ({
  $span: props.$span || 1,
}))`
  grid-column-start: auto;
  grid-column-end: span ${props => props.$span};

  padding: 16px;

  border-radius: 2px;
  border: ${getColor('faintLine')};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
`;

export const MetricCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetricTitle = styled.p`
  font-size: calc(14 / 16 * 1rem);
  color: ${getColor('grey')};
`;

export const MetricValue = styled(SectionHeading2)``;
