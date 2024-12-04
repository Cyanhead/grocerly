import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  otherNames: string[];
  category: string;
  about: string;
  images: {
    id: string;
    largeURL: string;
    smallURL: string;
    thumbnailURL: string;
  }[];
  price: number;
  stock: number;
  rating: 1 | 2 | 3 | 4 | 5;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  firstOrder: Timestamp;
  lastOrder: Timestamp;
};
