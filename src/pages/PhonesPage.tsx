import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../api/api';
import { CardItem } from '../components/CardItem';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { Pagination } from '../components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { slicedList } from '../utils/generatePagination';

export const PhonesPage = () => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentPageNumber = searchParams.get('page') || 1;

  useEffect(() => {
    if (isLoaded) return;
    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const phoneProducts = products.filter((product) => product.category === 'phones');
  const pageProductsList = slicedList(phoneProducts, +currentPageNumber, 16);

  return (
    <>
      <h1 className="text-lg">Phones Page</h1>
      <Pagination
        totalProducts={phoneProducts.length}
        productsPerPage={16}
        currentPageNumber={String(currentPageNumber)}
      />
      {isLoaded && (
        <div className="grid grid-cols-4 gap-y-1 gap-x-[300px]">
          {pageProductsList.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
