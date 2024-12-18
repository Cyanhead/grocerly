import { Timestamp } from 'firebase/firestore';
import { Roles } from '../../../context/auth/types';

export type UserInfoPropsType = {
  name: string;
  email: string;
  address: string[];
  roles: Roles;
  phone: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  firstOrder: Timestamp;
  lastOrder: Timestamp;
};
