import { AuthFormPropsType } from './AuthForm.type';
import {
  Container,
  Label,
  Prompt,
  Set,
  Title,
  Wrapper,
} from './AuthForm.styled';
import Input from '../../Input';
import Layout from '../../Layout';
import Button from '../../Button';
import { TriangleAlert } from 'lucide-react';

function AuthForm({ onSubmit, content, children }: AuthFormPropsType) {
  const { pre, title, subheading, fieldsets, button } = content;

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
                <Label htmlFor={id}>{label}</Label>
                <Input
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
        </Layout.FlexCol>

        <Button id="submit-btn" type="submit">
          {button.text}
        </Button>

        {children && children}
      </Wrapper>
    </Container>
  );
}

export default AuthForm;
