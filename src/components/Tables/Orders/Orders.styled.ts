import styled, { css } from 'styled-components';
import { getColor } from '../../../theme';

type StatusType = {
  $text: 'processing' | 'cancelled' | 'failed' | 'refunded' | 'completed';
};

export const Status = styled.span.attrs<StatusType>(props => ({
  $text: props.$text,
}))`
  ${props => {
    const status = props.$text.toLowerCase();

    switch (status) {
      case 'processing':
        return 'color: #1e4f82';
      case 'failed':
        return css`
          color: ${getColor('danger600')};
        `;
      case 'refunded':
        return css`
          color: #8b621b;
        `;
      case 'completed':
        return css`
          background-color: ${getColor('white')};
          color: ${getColor('primary700')};
        `;
      default:
        return css`
          color: ${getColor('black')};
        `;
    }
  }}
`;
