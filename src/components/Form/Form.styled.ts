import styled from 'styled-components';
import { getColor, getFontWeight } from '../../theme';
import BaseInput from '../Input';
import Button from '../Button';

export const Container = styled.div`
  padding: 0 8px;
`;

export const FormElement = styled.form`
  margin: 0 auto;

  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  max-height: 85dvh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: ${getColor('white')};

  margin: 8px auto;
  margin-bottom: 0;
  padding-bottom: 32px;
  border-radius: 2px;
`;

export const Title = styled.h1``;

export const Set = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 6px;

  border: none;
  width: 100%;
`;

export const Input = styled(BaseInput).attrs<{ $hasError?: boolean }>({})`
  border: 1px solid ${getColor('grey')};
  border-radius: 2px;

  transition: all 200ms;

  &:hover {
    border: 1px solid ${getColor('primary')};
  }
  &:focus {
    border: 1px solid ${getColor('primary')};
    border-right: 20px solid ${getColor('primary')};
  }
`;

export const TextArea = styled.textarea`
  color: ${getColor('black')};
  background-color: ${getColor('white')};

  width: 100%;
  height: 100px;
  border: 1px solid ${getColor('grey')};
  border-radius: 2px;
  padding: 4px 16px;

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

export const Select = styled.select`
  padding: 14px 4px;
  padding-left: 8px;
  background-color: ${getColor('white')};

  border: 1px solid ${getColor('grey')};
  border-radius: 2px;

  transition: all 200ms;

  &:hover {
    border: 1px solid ${getColor('primary')};
  }
  &:focus {
    border: 1px solid ${getColor('primary')};
  }
`;

export const Option = styled.option`
  text-transform: capitalize;
`;

export const SubmitButton = styled(Button)`
  font-weight: ${getFontWeight('semibold')};
  justify-content: center;
`;
