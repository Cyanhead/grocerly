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
} from 'lucide-react';
import { Layout, Logo } from '../../../components';
import { SectionTitle, Wrapper } from './SideBar.styled';
import SideBarButton from './SideBarButton';

const sections = [
  {
    title: 'customers',

    options: [
      { name: 'users', icon: Users },
      { name: 'products', icon: Package },
      { name: 'purchases', icon: DollarSign },

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

function SideBar() {
  return (
    <Wrapper data-testid="SideBar">
      <div style={{ paddingLeft: '16px', alignSelf: 'start' }}>
        <Logo />
      </div>
      <SideBarButton to="/admin" icon={Home} end>
        Dashboard
      </SideBarButton>
      {sections.map(({ title, options }, index) => (
        <SideBarSection key={index} title={title} options={options} />
      ))}
    </Wrapper>
  );
}

export default SideBar;

type SideBarSectionPropsType = {
  title: string;
  options: (typeof sections)[0]['options'];
};
const SideBarSection = ({ title, options }: SideBarSectionPropsType) => (
  <Layout.FlexCol as="nav" $align="stretch">
    <SectionTitle>{title}</SectionTitle>
    <ul style={{ listStyle: 'none' }}>
      {options.map(({ name, icon }, index) => (
        <li key={index}>
          <SideBarButton to={`/admin/${name}`} icon={icon}>
            {name}
          </SideBarButton>
        </li>
      ))}
    </ul>
  </Layout.FlexCol>
);
