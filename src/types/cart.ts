import { Product } from './Product';

export type CartItemType = {
  id: number;
  count: number;
  product: Product;
};
