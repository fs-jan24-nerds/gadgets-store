export enum NavMenu {
  home = 'home',
  phones = 'phones',
  tablets = 'tablets',
  accessories = 'accessories',
}

export enum PhoneColor {
  BLACK = 'Black',
  GREEN = 'Green',
  PURPLE = 'Purple',
  RED = 'Red',
  WHITE = 'White',
}

export type SortStatus = {
  name: string;
  sort: string;
  order: string;
};

export const sortStatus: SortStatus[] = [
  {
    name: 'Newest',
    sort: 'year',
    order: 'desc',
  },
  {
    name: 'Price Low',
    sort: 'price',
    order: 'asc',
  },
  {
    name: 'Price High',
    sort: 'price',
    order: 'desc',
  },
];
