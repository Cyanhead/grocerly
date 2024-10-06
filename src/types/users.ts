import { Timestamp } from 'firebase/firestore';

export type Users = {
  id: string;
  name: string;
  email: string;
  address: string;
  firstOrder: Timestamp;
  lastOrder: Timestamp;
  orders: number;
  revenue: number;
}[];
