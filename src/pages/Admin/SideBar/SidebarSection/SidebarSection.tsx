import { SidebarSectionPropsType } from './SidebarSection.type';
import { Layout } from '../../../../components';
import { SectionTitle } from '../SideBar.styled';
import SideBarButton from '../SideBarButton';

function SidebarSection({ title, options, tabIndex }: SidebarSectionPropsType) {
  return (
    <Layout.FlexCol as="nav" $align="stretch">
      <SectionTitle>{title}</SectionTitle>
      <ul style={{ listStyle: 'none' }}>
        {options.map(({ name, icon }, index) => (
          <li key={index}>
            <SideBarButton
              to={`/admin/${name}`}
              icon={icon}
              tabIndex={tabIndex}
            >
              {name}
            </SideBarButton>
          </li>
        ))}
      </ul>
    </Layout.FlexCol>
  );
}

export default SidebarSection;
