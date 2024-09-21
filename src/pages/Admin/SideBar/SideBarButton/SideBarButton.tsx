import { SideBarButtonPropsType } from './SideBarButton.type';
import { Button } from './SideBarButton.styled';
import { Icon } from '../../../../components';

function SideBarButton({
  to,
  icon,
  children,
  tabIndex,
  end,
}: SideBarButtonPropsType) {
  function toKebabCase(word: string) {
    return word.split(' ').join('-').toLowerCase();
  }

  const path = toKebabCase(to);

  return (
    <Button to={path} tabIndex={tabIndex} data-testid="SideBarButton" end={end}>
      <Icon icon={icon} />
      {children}
    </Button>
  );
}

export default SideBarButton;
