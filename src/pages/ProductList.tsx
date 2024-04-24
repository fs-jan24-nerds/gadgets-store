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
import { Grid } from '../components/Grid/Grid';
import { GridItem } from '../components/Grid/GridItem';
import { CardItemSkeleton } from '../components/CardItem/CardItemSkeleton';
import { Title } from '../components/Title/Title';

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
  const currentPageNumber = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = parseInt(searchParams.get('perPage') || '16', 10);

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
  const title = useParams();

  const productTitle = title?.category 
  ? title.category.charAt(0).toUpperCase() + title.category.slice(1) 
  : "";

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

  const pageProductsList = slicedList(sortedProducts, currentPageNumber, itemsPerPage);

  return (
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      <Grid>
        <GridItem>
          <div className='mb-[-20px]'>
            <Breadcrumbs />
          </div>
        </GridItem>

        <GridItem>
          <Title title={productTitle} />
        </GridItem>

        <GridItem>
          <p className="text-secondary text-xs font-semibold mb-10 mt-2 ">{totalLength} models</p>
        </GridItem>

        <GridItem>
          <SortComponent />
        </GridItem>
      </Grid>

      {isLoaded ? (
        <Grid>
          {pageProductsList.map((product) => (
            <GridItem
              key={product.id}
              className="col-span-4 tablet:col-span-6 laptop:col-span-4 desktop:col-span-6"
            >
              <CardItem product={product} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid>
          {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
            <GridItem
              key={index}
              className="col-span-4 tablet:col-span-6 laptop:col-span-4 desktop:col-span-6"
            >
              <CardItemSkeleton />
            </GridItem>
          ))}
        </Grid>
      )}

      <Pagination
        totalProducts={totalLength}
        productsPerPage={itemsPerPage}
        currentPageNumber={currentPageNumber}
      />
    </div>
  );
};
