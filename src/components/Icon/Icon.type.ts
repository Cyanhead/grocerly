import { LucideProps } from 'lucide-react';

type LucideIconType = React.ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;

export type IconPropsType = {
  withoutText?: boolean;
  icon: LucideIconType;
  visuallyHidden?: string;
};
