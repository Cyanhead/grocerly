import { IconPropsType } from '../../../components/Icon';

export type DetailsPropsType = {
  type: 'product' | 'user';
  image: string;
  name: string;
  additionalInfo: string;
  stats: {
    stat: string;
    value: number | string;
    icon: IconPropsType['icon'];
  }[];
  setShowEditModal?: (value: boolean) => void;
};
