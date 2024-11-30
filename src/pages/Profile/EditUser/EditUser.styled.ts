import styled from 'styled-components';
import { FormElement } from '../../../components/Form/Form.styled';
import {
  FormInput,
  Label as AuthLabel,
} from '../../../components/Form/AuthForm/AuthForm.styled';
import { StyledButton } from '../../../components/Button/Button.styled';
import { getFontWeight } from '../../../theme';

export const Form = styled(FormElement)`
  gap: 8px;

  min-width: 700px;
`;

export const Input = styled(FormInput)``;

export const Label = styled(AuthLabel)``;

export const SubmitButton = styled(StyledButton)`
  justify-content: center;
  font-weight: ${getFontWeight('semibold')};

  margin-top: 16px;
`;
