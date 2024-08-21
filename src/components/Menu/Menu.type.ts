import { LucideProps } from 'lucide-react';

export type MenuPropsType = {
  children: React.ReactNode;
  options: {
    type: 'text' | 'button';
    label: string;
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
    onClick?: () => void;
  }[];
  // id: string;
  // anchor?: 'top' | 'bottom' | 'left' | 'right';
  // willUseParentPosition?: boolean;
};
