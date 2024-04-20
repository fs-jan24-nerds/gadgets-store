import productsJson from '../../public/api/products.json';
import phonesJson from '../../public/api/phones.json';
import { Item, Product } from '../types/Product';

export const getProducts = () => {
  return productsJson as Product[];
};

export const getPhones = () => {
  return phonesJson as Item[];
};

export const getPhone = (id: number) => {
  return getPhones().find((product) => product.id === id.toString());
};
