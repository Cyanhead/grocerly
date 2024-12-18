import { IconPropsType } from '../../../../components/Icon';

export type SidebarSectionPropsType = {
  title: string;
  options: { name: string; icon: IconPropsType['icon'] }[];
  tabIndex?: number;
};
