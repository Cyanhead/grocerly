import { AuthFormPropsType } from './AuthForm.type';
import {
  Container,
  FormInput,
  Label,
  OptionalTag,
  Prompt,
  Set,
  SubmitButton,
  Title,
  Wrapper,
} from './AuthForm.styled';
import Layout from '../../Layout';
import { TriangleAlert } from 'lucide-react';

function AuthForm({ onSubmit, content, children }: AuthFormPropsType) {
  const { pre, title, subheading, fieldsets, customInput, button } = content;

  return (
    <Container data-testid="AuthForm">
      <Wrapper onSubmit={onSubmit} aria-label="auth-form">
        <Layout.FlexCol>
          {pre && pre}
          <Title>{title}</Title>
          {subheading && subheading}
        </Layout.FlexCol>

        <Layout.FlexCol $gap={16}>
          {fieldsets.map(
            ({
              id,
              label,
              type,
              placeholder,
              required,
              value,
              onChange,
              error,
            }) => (
              <Set key={id}>
                <Label htmlFor={id}>
                  {label}{' '}
                  {required === false && <OptionalTag>(optional)</OptionalTag>}
                </Label>
                <FormInput
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  value={value}
                  onChange={e => onChange(e.target.value)}
                />
                {error?.trigger && (
                  <Prompt>
                    <TriangleAlert size={18} />
                    {error.prompt}
                  </Prompt>
                )}
              </Set>
            )
          )}

          {customInput && customInput}
        </Layout.FlexCol>

        <SubmitButton
          id="submit-btn"
          type="submit"
          disabled={button.isDisabled}
        >
          {button.text}
        </SubmitButton>

        {children && children}
      </Wrapper>
    </Container>
  );
}

export default AuthForm;
