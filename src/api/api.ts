import axios from 'axios';
import { Item, Product } from '../types/Product';

const server = axios.create({
  baseURL: 'https://nerds-gs-backend.onrender.com',
});

type getRequestParams = {
  order?: string;
  page?: number;
  perPage?: number;
  sort?: string;
  itemId?: string;
  productId?: string;
  namespaceId?: string;
  category?: string;
  id?: number;
  search?: string;
  from?: string;
  to?: string;
};

// get all products
export const getProducts = async ({ page, perPage, sort, category, order }: getRequestParams) => {
  const response = await server.get('/products', {
    params: {
      page,
      perPage,
      sort,
      category,
      order,
    },
  });

  return response.data as {
    products: Product[];
    total: number;
  };
};

// get productDetails by id
export const getItemById = async ({ itemId }: getRequestParams) => {
  const resp = await server.get(`/products/details/${itemId}`);

  return resp.data as Item;
};
//get product by id
export const getProductById = async ({ productId }: getRequestParams) => {
  const resp = await server.get(`/products/${productId}`);

  return resp.data as Product;
};

export const getItemAndProductById = async ({ itemId, productId }: getRequestParams) => {
  const resp = await Promise.all([
    await getItemById({ itemId }),
    (await getSameModels({ namespaceId: productId }))[0],
  ]);

  return resp;
};

//get same models variations for product
export const getSameModels = async ({ namespaceId }: getRequestParams) => {
  const resp = await server.get(`/products/similar`, {
    params: {
      namespaceId,
    },
  });

  return resp.data as Product[];
};

export const getRecommended = async ({ category }: getRequestParams) => {
  const resp = await server.get(`/products/${category}/recommended`);

  return resp.data as Product[];
};
export const getHot = async () => {
  const resp = await server.get(`/products/products/hot-price`);

  return resp.data as Product[];
};

export const getSearch = async ({ search }: getRequestParams) => {
  const resp = await server.get('products', {
    params: {
      query: search,
    },
  });

  return resp.data.products as Product[];
};

export type getter<T> = (params: getRequestParams) => Promise<T>;
type setter<T> = (_: T) => void;

export const asyncGetAndSet = <T>(getter: getter<T>, setter: setter<T>) => {
  return (params?: getRequestParams) => {
    getter(params || {}).then((data) => {
      setter(data);
    });
  };
};

export const preparedSameModelGetter = async (config: { namespaceId?: string }) => {
  const sameModels = await getSameModels({ namespaceId: config.namespaceId });

  const data = await Promise.all(
    sameModels.map(async (p) => {
      const item = await getItemById({ itemId: p.itemId });
      return {
        ...p,
        item,
      };
    }),
  );

  return data;
};
