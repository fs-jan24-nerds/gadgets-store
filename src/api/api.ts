import productsJson from '../../public/api/products.json';
import phonesJson from '../../public/api/phones.json';
import tabletsJson from '../../public/api/tablets.json';
import accessoriesJson from '../../public/api/accessories.json';

import { Accessorie, Item, Phone, Product, Tablet } from '../types/Product';
import { slicedList } from '../utils/generatePagination';
import { SortStatus } from '../types/enums';

export const getProducts = () => {
  return productsJson as Product[];
};

export const getPhones = () => {
  return phonesJson as Phone[];
};

export const getTablets = () => {
  return tabletsJson as Tablet[];
};

export const getAccessories = () => {
  return accessoriesJson as Accessorie[];
};

export const getProductById = (productId: string, category: string): Item | undefined => {
  switch (category) {
    case 'phones':
      return getPhones().find((product) => product.id === productId);
    case 'tablets':
      return getTablets().find((product) => product.id === productId);
    case 'accessories':
      return getAccessories().find((product) => product.id === productId);
  }
};
interface ProductsQuery {
  category: string;
  page?: number;
  limit?: number;
  sortBy?: string;
}

interface ProductsResponse {
  products: Product[];
}

const sortByYear = (a: Product, b: Product): number => {
  const aYear = a.year ?? 0;
  const bYear = b.year ?? 0;

  return bYear - aYear;
};

export const getProducts1 = (query: ProductsQuery): ProductsResponse => {
  console.log(query);
  const { category, page = 1, limit = 16, sortBy = 'Newest' } = query;

  console.log({ category, page, limit });

  const products = productsJson.filter((prod) => prod.category === query.category) as Product[];

  switch (sortBy) {
    case SortStatus.PriceHigh:
      products.sort((a, b) => b.price - a.price);
      break;
    case SortStatus.PriceLow:
      products.sort((a, b) => a.price - b.price);
      break;
    case SortStatus.Newest:
      products.sort(sortByYear);
      break;
    default:
  }

  const pageProductsList = slicedList(products, page, limit);

  return { products: pageProductsList };
};
