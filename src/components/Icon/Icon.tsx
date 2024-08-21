import { IconPropsType } from './Icon.type';
import { Wrapper } from './Icon.styled';
import VisuallyHidden from '../VisuallyHidden';

function Icon({
  isIconStandalone = false,
  icon: IconElement,
  visuallyHidden,
}: IconPropsType) {
  if (isIconStandalone) {
    return (
      <Wrapper data-testid="Icon">
        <IconElement size={24} />
        {visuallyHidden && <VisuallyHidden>{visuallyHidden}</VisuallyHidden>}
      </Wrapper>
    );
  }

  return <IconElement size={24} data-testid="Icon" />;
}

export default Icon;
