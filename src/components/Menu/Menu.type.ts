import { LucideProps } from 'lucide-react';

export type MenuPropsType = {
  children: React.ReactNode;
  hasChevron?: boolean;
  options: {
    type: 'text' | 'button' | 'link';
    label: string;
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >;
    onClick?: () => void;
    linkPath?: string;
  }[];
  // id: string;
  // anchor?: 'top' | 'bottom' | 'left' | 'right';
  // willUseParentPosition?: boolean;
};
