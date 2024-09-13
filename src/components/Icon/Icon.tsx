import { IconPropsType } from './Icon.type';
import { Wrapper } from './Icon.styled';
import VisuallyHidden from '../VisuallyHidden';

function Icon({
  isIconStandalone = false,
  icon: IconElement,
  size = 24,
  visuallyHidden,
}: IconPropsType) {
  if (isIconStandalone) {
    return (
      <Wrapper data-testid="Icon">
        <IconElement size={size} />
        {visuallyHidden && <VisuallyHidden>{visuallyHidden}</VisuallyHidden>}
      </Wrapper>
    );
  }

  return <IconElement size={size} data-testid="Icon" />;
}

export default Icon;
