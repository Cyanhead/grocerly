import { useRef, useState } from 'react';
import { MenuPropsType } from './Menu.type';
import {
  Button,
  Container,
  ListButtonWrapper,
  ListText,
  Ul,
} from './Menu.styled';
import { useClickOutside } from '../../hooks';
import Icon from '../Icon';

import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Menu = ({ children, hasChevron = false, options }: MenuPropsType) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside([menuRef], () => setShowMenu(false));

  return (
    <Container ref={menuRef}>
      <Button onClick={() => setShowMenu(!showMenu)} $variant="normal">
        {children}
        {hasChevron && (
          <>
            {showMenu ? <Icon icon={ChevronUp} /> : <Icon icon={ChevronDown} />}
          </>
        )}
      </Button>
      {showMenu && (
        <Ul>
          {options.map(({ type, label, icon, onClick, linkPath = '/' }) => {
            if (type === 'text')
              return <ListText key={label}>{label}</ListText>;

            if (type === 'link')
              return (
                <ListButtonWrapper key={label}>
                  <Button
                    as={Link}
                    to={linkPath}
                    onClick={onClick}
                    $variant="normal"
                    $pad={20}
                    $gap={12}
                  >
                    {icon && <Icon icon={icon} />}
                    {label}
                  </Button>
                </ListButtonWrapper>
              );

            if (
              // NOTE: equivalent of breakpoint getBreakpoint('xl')
              window.innerWidth >= 1200 &&
              (label.toLowerCase() === 'wishlist' ||
                label.toLowerCase() === 'my cart')
            )
              return;

            return (
              <ListButtonWrapper key={label}>
                <Button onClick={onClick} $variant="normal" $pad={20} $gap={12}>
                  {icon && <Icon icon={icon} />}
                  {label}
                </Button>
              </ListButtonWrapper>
            );
          })}
        </Ul>
      )}
    </Container>
  );
};

export default Menu;
