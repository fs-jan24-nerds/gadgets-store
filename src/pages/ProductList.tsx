import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../api/api';
import { CardItem } from '../components/CardItem';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { Pagination } from '../components/Pagination/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';
import { slicedList } from '../utils/generatePagination';
import { ITEMS_PER_PAGE } from '../types/constants';
import { Product } from '../types/Product';
import { selectCurrentSort, setSort } from '../store/SortSlice';
import { SortStatus } from '../types/enums';
import { SortComponent } from '../components/SortComponent/SortComponent';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

const sortByYear = (a: Product, b: Product): number => {
  const aYear = a.year ?? 0;
  const bYear = b.year ?? 0;

  return bYear - aYear;
};

export const ProductList = () => {
  const { category } = useParams();

  const { products, isLoaded } = useSelector((state: RootState) => state.products);
  const currentSort = useSelector(selectCurrentSort);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentPageNumber = searchParams.get('page') || 1;

  useEffect(() => {
    const currentSort = searchParams.get('sort') as SortStatus;
    if (currentSort && Object.values(SortStatus).includes(currentSort)) {
      dispatch(setSort(currentSort));
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(setProducts(getProducts()));
    }
  }, [isLoaded, dispatch]);

  const allProducts = products.filter((product) => product.category === category);

  const totalLength = allProducts.length;
  const sortedProducts = [...allProducts];

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
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      <Breadcrumbs />
      <h1 className="text-5xl font-extrabold">Mobile phones</h1>
      <p className="text-secondary text-xs font-semibold mb-10 mt-2 ">{totalLength} models</p>
      <SortComponent />
      {isLoaded && (
        <div className="grid grid-cols-4 gap-y-1">
          {pageProductsList.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination
        totalProducts={totalLength}
        productsPerPage={ITEMS_PER_PAGE}
        currentPageNumber={+currentPageNumber}
      />
    </div>
  );
};
