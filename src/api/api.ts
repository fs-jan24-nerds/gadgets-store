import productsJson from '../../public/api/products.json';
import phonesJson from '../../public/api/phones.json';
import tabletsJson from '../../public/api/tablets.json';
import accessoriesJson from '../../public/api/accessories.json';

import { Item, Product } from '../types/Product';

export const getProducts = () => {
  return productsJson as Product[];
};

export const getPhones = () => {
  return phonesJson as Item[];
};

export const getTablets = () => {
  return tabletsJson as Item[];
};

export const getAccessories = () => {
  return accessoriesJson as Item[];
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
