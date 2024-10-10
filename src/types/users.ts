import { Timestamp } from 'firebase/firestore';
import { Roles } from '../context/auth/types';

export type Users = {
  id: string;
  name: string;
  email: string;
  image: string;
  roles: Roles;
  address: string[];
  firstOrder: Timestamp;
  lastOrder: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}[];
