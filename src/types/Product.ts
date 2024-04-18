export type Categories = 'phones' | 'tablets' | 'accessories'

export interface Description {
  title: string;
  text: string[];
}
export interface Product {
  id: number;
  category: Categories;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  item?: Item;
};

export interface FavouriteProduct {
  id:number,
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  item?: Item;
};


export interface Item {
  id: string;
  category: Categories;
  namespaceId: string;
  name: string;
  capacityAvailable: string[]
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export interface Tablet extends Omit<Item, 'category'> { category: 'tablets' };
export interface Accessorie extends Omit<Item, 'category'> { category: 'accessories' };
export interface Phone extends Omit<Item, 'category'> { category: 'phones' };
