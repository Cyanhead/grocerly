import { Timestamp } from 'firebase/firestore';

export type Products = {
  id: string;
  name: string;
  otherNames: string[];
  category: string;
  about: string;
  images: string[];
  price: number;
  stock: number;
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastOrder: Timestamp;
}[];