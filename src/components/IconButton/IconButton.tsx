import { IconButtonPropsType } from './IconButton.type';
import { StyledIconButton } from './IconButton.styled';
import VisuallyHidden from '../VisuallyHidden';
import { forwardRef } from 'react';
import Icon from '../Icon/Icon';

function IconButton(
  { icon, visuallyHidden, ...delegated }: IconButtonPropsType,
  ref: any
) {
  return (
    <StyledIconButton
      ref={ref}
      data-testid="IconButton"
      $variant="normal"
      $pad={10}
      {...delegated}
    >
      <Icon icon={icon} withoutText />
      {visuallyHidden && <VisuallyHidden>{visuallyHidden}</VisuallyHidden>}
    </StyledIconButton>
  );
}

export default forwardRef(IconButton);
