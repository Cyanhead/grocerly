import {
  Building,
  CircleDollarSign,
  Cog,
  DollarSign,
  FileBarChart2Icon,
  Home,
  Package,
  Repeat2,
  Scroll,
  Settings2,
  Users,
  X,
} from 'lucide-react';
import { Logo } from '../../../components';
import { CloseButton, GreyBg, Wrapper } from './SideBar.styled';
import SideBarButton from './SideBarButton';
import SidebarSection from './SidebarSection';
import { SideBarPropsType } from './SideBar.type';
import { useClickOutside } from '../../../hooks';
import { useEffect, useRef } from 'react';

const sections = [
  {
    title: 'customers',

    options: [
      { name: 'users', icon: Users },
      { name: 'products', icon: Package },
      { name: 'orders', icon: DollarSign },

      // { name: 'guarantors', icon:  },
      // { name: 'loans', icon: null },
      // { name: 'decision models', icon: null },
      // { name: 'savings', icon: null },
      // { name: 'loan requests', icon: null },
      // { name: 'whitelist', icon: null },
      // { name: 'karma', icon: null },
    ],
  },
  {
    title: 'businesses',
    options: [
      { name: 'organization', icon: Building },
      { name: 'reports', icon: FileBarChart2Icon },
      { name: 'service accounts', icon: Cog },
      { name: 'returns and refunds', icon: Repeat2 },
      // { name: 'loan products', icon: null },
      // { name: 'savings products', icon: null },
      // { name: 'fees and charges', icon: null },
      // { name: 'transactions', icon: null },
      // { name: 'services', icon: null },
    ],
  },
  {
    title: 'settings',
    options: [
      { name: 'preferences', icon: Settings2 },
      { name: 'pricing', icon: CircleDollarSign },
      { name: 'audit logs', icon: Scroll },
    ],
  },
];

function SideBar({ showSideBar, setShowSideBar }: SideBarPropsType) {
  const sideBarRef = useRef(null);

  useClickOutside([sideBarRef], () => {
    setShowSideBar(false);
  });

  // ensures that the buttons are keyboard-focusable on large screens
  const tabIndex = window.innerWidth >= 992 ? 0 : showSideBar ? 0 : -1;

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSideBar]);

  return (
    <>
      <GreyBg $show={showSideBar} />
      <Wrapper ref={sideBarRef} data-testid="SideBar" $isOpen={showSideBar}>
        <div style={{ paddingLeft: '16px', alignSelf: 'start' }}>
          <Logo tabIndex={tabIndex} />
        </div>
        <SideBarButton to="/admin" icon={Home} tabIndex={tabIndex} end>
          Dashboard
        </SideBarButton>
        {sections.map(({ title, options }, index) => (
          <SidebarSection
            key={index}
            title={title}
            options={options}
            tabIndex={tabIndex}
          />
        ))}
      </Wrapper>
      <CloseButton
        $show={showSideBar}
        variant="ghost"
        visuallyHidden="close sidebar"
        icon={X}
        onClick={() => setShowSideBar(false)}
        tabIndex={tabIndex}
      />
    </>
  );
}

export default SideBar;
