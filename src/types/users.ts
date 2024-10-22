import { FieldValue, Timestamp } from 'firebase/firestore';
import { Roles } from '../context/auth/types';

export type Users = {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  roles: Roles;
  address: string[];
  firstOrder: Timestamp | null;
  lastOrder: Timestamp | null;
  createdAt: FieldValue | Timestamp | null;
  updatedAt: FieldValue | Timestamp | null;
}[];
