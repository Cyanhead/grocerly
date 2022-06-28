import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.color.white};
  color: rgba(0, 0, 0, 0.5);

  width: 200px;
  margin: 8px 0;

  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const CounterText = styled.p`
  color: ${props => props.theme.color.black};
  font-size: 1.125rem;
  font-weight: ${props => props.theme.fontWght.medium};
`;
