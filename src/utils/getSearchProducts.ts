import { Product } from '../types/Product';

export const getSearchProducts = (products: Product[], query: string) => {
  if (query) {
    return products.filter((product: Product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
};
