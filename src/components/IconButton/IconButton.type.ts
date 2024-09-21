import { LucideProps } from 'lucide-react';
import { ButtonPropsType } from '../Button/Button.type';

export type IconButtonPropsType = Omit<ButtonPropsType, 'children'> & {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  visuallyHidden?: string;
  size?: number;
  variant?: ButtonPropsType['$variant'];
};
