import { Product } from '../types/Product';

export const generatePagination = (currentPage: number, totalPages: number) => {
  console.log({ currentPage, totalPages });

  if (totalPages <= 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const center = [currentPage - 1, currentPage, currentPage + 1],
    filteredCenter: (number | string)[] = center.filter((page) => page >= 1 && page <= totalPages),
    includeThreeLeft = currentPage === 1,
    includeThreeRight = currentPage === totalPages,
    includeLeftDots = currentPage > 2,
    includeRightDots = currentPage < totalPages - 1;

  if (includeThreeLeft) filteredCenter.push(3);
  if (includeThreeRight) filteredCenter.unshift(totalPages - 2);

  if (includeLeftDots) filteredCenter.unshift('...');
  if (includeRightDots) filteredCenter.push('...');

  return filteredCenter;
};

export const slicedList = (data: Product[], page: number, itemsPerPage: number) => {
  const fromPage = (page - 1) * itemsPerPage;
  const toPage = fromPage + itemsPerPage;

  return data.slice(fromPage, toPage);
};
