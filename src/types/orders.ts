import { Timestamp } from 'firebase/firestore';

export type Orders = {
  id: string;
  status: 'processing' | 'cancelled' | 'failed' | 'refunded' | 'completed';
  createdAt: Timestamp;
  customer: {
    id: string;
    name: string;
  };
  products: {
    id: string;
    image: string;
    name: string;
    count: number;
    price: number;
  }[];
  revenue: number;
  netProfit: number;
}[];
