import { IconPropsType } from '../../../../components/Icon';

export type SideBarButtonPropsType = {
  to: string;
  icon: IconPropsType['icon'];
  tabIndex?: number;
  children: React.ReactNode;
  end?: boolean;
};
