import { Product } from '../types/Product';

export default function createUniqueList<T extends string | number>(
  products: Product[],
  propertyName: keyof Product,
): T[] {
  const uniqueValues = new Set<T>();
  products.forEach((product) => {
    const propertyValue = product[propertyName];
    if (propertyValue) {
      uniqueValues.add(propertyValue as T);
    }
  });

  return Array.from(uniqueValues);
}
