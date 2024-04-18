import productsJson from "../../public/api/products.json"
import { Product } from "../types/Product";

export const getProducts = () => {
  return productsJson as Product[];
}