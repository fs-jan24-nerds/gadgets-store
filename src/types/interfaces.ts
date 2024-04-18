export interface IDescriptionSection {
  title: string;
  text: string[];
}

export interface IProduct {
  id: string;
  name: string;
  capacityAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  images: string[];
  description: IDescriptionSection[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
