import { getFontWeight } from './../../../theme/themeUtils';
import styled from 'styled-components';
import { getColor } from '../../../theme';
import Input from '../../Input';
import Button from '../../Button';

export const Container = styled.div`
  padding: 0 8px;
`;

export const Wrapper = styled.form`
  margin: 0 auto;

  max-width: 576px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: ${getColor('white')};

  margin: 8px auto;
  margin-bottom: 0;
  padding: 20px;
  padding-bottom: 32px;
  border-radius: 2px;
`;

export const Title = styled.h1``;

export const Set = styled.fieldset`
  border: none;
  width: 100%;
`;

export const FormInput = styled(Input).attrs<{ $hasError?: boolean }>({})`
  border: 1px solid ${getColor('grey')};
  border-radius: 2px;
  margin-top: 6px;

  transition: all 200ms;

  &:hover {
    border: 1px solid ${getColor('primary')};
  }
  &:focus {
    border: 1px solid ${getColor('primary')};
    border-right: 20px solid ${getColor('primary')};
  }
`;

export const Label = styled.label`
  color: ${getColor('primary600')};

  margin-bottom: 4px;

  font-weight: ${getFontWeight('medium')};
`;

export const OptionalTag = styled.span`
  color: ${getColor('grey')};
`;

export const Prompt = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${getColor('danger600')};
  margin-top: 8px;
  font-weight: ${getFontWeight('medium')};
`;

export const SubmitButton = styled(Button)`
  font-weight: ${getFontWeight('semibold')};
  justify-content: center;
`;
