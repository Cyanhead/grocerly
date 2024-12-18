import VisuallyHidden from '../VisuallyHidden';
import { Badge, Wrapper } from './IconAndBadge.styled';
import { IconAndBadgePropsType } from './IconAndBadge.type';

function IconAndBadge({
  isIconStandalone = false,
  icon: IconElement,
  size = 24,
  count,
  visuallyHidden,
}: IconAndBadgePropsType) {
  if (isIconStandalone) {
    return (
      <Wrapper data-testid="Icon">
        <IconElement size={size} />
        {count !== 0 && <Badge>{count}</Badge>}
        {visuallyHidden && <VisuallyHidden>{visuallyHidden}</VisuallyHidden>}
      </Wrapper>
    );
  }

  return (
    <Wrapper data-testid="Icon">
      <IconElement size={size} data-testid="Icon" />
      {count !== 0 && <Badge>{count}</Badge>}
    </Wrapper>
  );
}

export default IconAndBadge;
