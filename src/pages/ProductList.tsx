import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../api/api';
import { CardItem } from '../components/CardItem';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { Pagination } from '../components/Pagination/Pagination';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { slicedList } from '../utils/generatePagination';
import { ITEMS_PER_PAGE } from '../types/constants';

export const ProductList = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const { products, isLoaded } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentPageNumber = searchParams.get('page') || 1;

  useEffect(() => {
    if (!isLoaded) {
      dispatch(setProducts(getProducts()));
    }
  }, [isLoaded, dispatch]);

  const allProducts = products.filter((product) => product.category === category);
  const pageProductsList = slicedList(allProducts, +currentPageNumber, ITEMS_PER_PAGE);

  if (allProducts.length) {
    navigate('/gadgets-store/');
  }

  return (
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      <h1 className="text-lg">Phones Page</h1>
      {isLoaded && (
        <div className="grid grid-cols-4 gap-y-1">
          {pageProductsList.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      )}
      <Pagination
        totalProducts={allProducts.length}
        productsPerPage={ITEMS_PER_PAGE}
        currentPageNumber={+currentPageNumber}
      />
    </div>
  );
};