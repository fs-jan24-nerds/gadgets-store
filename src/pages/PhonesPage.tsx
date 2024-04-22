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


export const PhonesPage = () => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);
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
  const pageProductsList = slicedList(phoneProducts, +currentPageNumber, ITEMS_PER_PAGE);

  return (
    <div className="max-w-max-width mx-auto box-content px-6 lg:px-8">
      <Breadcrumbs categoryName={'Phones'} />

      <h1 className="text-lg">Phones Page</h1>
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
        totalProducts={phoneProducts.length}
        productsPerPage={ITEMS_PER_PAGE}
        currentPageNumber={+currentPageNumber}
      />
    </div>
  );
};
