import { ButtonPropsType, LinkButtonPropsType } from './Button.type';
import { StyledButton } from './Button.styled';
import { Link } from 'react-router-dom';

const Button = ({
  as = 'button',
  children,
  variant = 'primary',
  ...delegated
}: ButtonPropsType) => {
  return (
    <StyledButton as={as} type="button" $variant={variant} {...delegated}>
      {children}
    </StyledButton>
  );
};

export default Button;

export const LinkButton = ({
  variant = 'primary',
  children,
  ...delegated
}: LinkButtonPropsType) => {
  return (
    <StyledButton as={Link} $variant={variant} {...delegated}>
      {children}
    </StyledButton>
  );
};
