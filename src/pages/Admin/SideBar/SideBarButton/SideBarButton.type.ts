import { IconPropsType } from '../../../../components/Icon';

export type SideBarButtonPropsType = {
  to: string;
  icon: IconPropsType['icon'];
  children: React.ReactNode;
  end?: boolean;
};
