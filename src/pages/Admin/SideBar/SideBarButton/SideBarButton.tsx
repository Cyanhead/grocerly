import { SideBarButtonPropsType } from './SideBarButton.type';
import { Button } from './SideBarButton.styled';
import Icon from '../../../../components/Icon';

function SideBarButton({ to, icon, children }: SideBarButtonPropsType) {
  function toKebabCase(word: string) {
    return word.split(' ').join('-').toLowerCase();
  }

  const path = toKebabCase(to);

  return (
    <Button to={path} end data-testid="SideBarButton">
      <Icon icon={icon} />
      {children}
    </Button>
  );
}

export default SideBarButton;
