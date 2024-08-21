import { ButtonPropsType, LinkButtonPropsType } from './Button.type';
import { StyledButton } from './Button.styled';
import { Link } from 'react-router-dom';

const Button = ({ as = 'button', children, ...delegated }: ButtonPropsType) => {
  return (
    <StyledButton as={as} type="button" {...delegated}>
      {children}
    </StyledButton>
  );
};

export default Button;

export const LinkButton = ({ children, ...delegated }: LinkButtonPropsType) => {
  return (
    <StyledButton as={Link} {...delegated}>
      {children}
    </StyledButton>
  );
};
