import { Timestamp } from 'firebase/firestore';
import { Roles } from '../context/auth/types';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoUrl: string;
  roles: Roles;
  address: string[];
  firstOrder: Timestamp;
  lastOrder: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};
