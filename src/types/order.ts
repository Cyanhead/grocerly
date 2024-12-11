import { Timestamp } from 'firebase/firestore';

export type Order = {
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
    quantity: number;
    price: number;
  }[];
  revenue: number;
  netProfit: number;
};
