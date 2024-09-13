import { IconPropsType } from '../../../components/Icon';

export type DetailsPropsType = {
  image: string;
  name: string;
  additionalInfo: string;
  stats: {
    stat: string;
    value: number | string;
    icon: IconPropsType['icon'];
  }[];
};
