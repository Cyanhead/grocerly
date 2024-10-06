import { Timestamp } from 'firebase/firestore';

export type Orders = {
  status: 'processing' | 'cancelled' | 'failed' | 'refunded' | 'completed';
  netProfit: number;
  products: {
    id: string;
    name: string;
    count: number;
    price: number;
  }[];
  createdAt: Timestamp;
  customerId: string;
  id: string;
  revenue: number;
}[];
