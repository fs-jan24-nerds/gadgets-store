import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../api/api';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { CardItem } from '../components/CardItem';
import { Pagination } from '../components/Pagination/Pagination';
import { setProducts } from '../store/productsSlice';
import { RootState } from '../store/store';
import { ITEMS_PER_PAGE } from '../types/constants';
import { Grid } from '../components/Grid/Grid';
import { GridItem } from '../components/Grid/GridItem';
import { slicedList } from '../utils/generatePagination';

import { selectCurrentSort } from '../store/SortSlice';
import { SortStatus } from '../types/enums';
import { Product } from '../types/Product';
import { SortComponent } from '../components/SortComponent/SortComponent';

const sortByYear = (a: Product, b: Product): number => {
  const aYear = a.year ?? 0;
  const bYear = b.year ?? 0;

  return bYear - aYear;
};

export const PhonesPage = () => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);
  const currentSort = useSelector(selectCurrentSort);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentPageNumber = searchParams.get('page') || 1;

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const phoneProducts = products.filter((product) => product.category === 'phones');

  const totalLength = phoneProducts.length;

  const sortedProducts = [...phoneProducts];

  switch (currentSort) {
    case SortStatus.PriceHigh:
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case SortStatus.PriceLow:
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case SortStatus.Newest:
      sortedProducts.sort(sortByYear);
      break;
    default:
  }

  const pageProductsList = slicedList(sortedProducts, +currentPageNumber, ITEMS_PER_PAGE);

  return (
    <div className="max-w-max-width mx-auto box-content px-6 lg:px-8">
      <Breadcrumbs categoryName={'Phones'} />
      <h1 className="text-5xl font-extrabold">Mobile phones</h1>
      <p className="text-secondary text-xs font-semibold mb-10 mt-2 ">{totalLength} models</p>
      <SortComponent />

      {isLoaded && (
        <Grid>
          {pageProductsList.map((product) => (
            <GridItem key={product.id} className="col-span-4 tablet:col-span-6">
              <CardItem product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
      <Pagination
        totalProducts={totalLength}
        productsPerPage={ITEMS_PER_PAGE}
        currentPageNumber={+currentPageNumber}
      />
    </div>
  );
};
