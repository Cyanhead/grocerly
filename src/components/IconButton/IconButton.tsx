import { IconButtonPropsType } from './IconButton.type';
import { StyledIconButton } from './IconButton.styled';
import VisuallyHidden from '../VisuallyHidden';
import { forwardRef, Ref } from 'react';
import Icon from '../Icon/Icon';

function IconButton(
  { icon, visuallyHidden, ...delegated }: IconButtonPropsType,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <StyledIconButton
      ref={ref}
      data-testid="IconButton"
      $variant="normal"
      $pad={10}
      {...delegated}
    >
      <Icon icon={icon} isIconStandalone />
      {visuallyHidden && <VisuallyHidden>{visuallyHidden}</VisuallyHidden>}
    </StyledIconButton>
  );
}

const ForwardedWithRef = forwardRef(IconButton);
export default ForwardedWithRef;
