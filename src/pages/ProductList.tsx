import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { asyncGetAndSet, getProducts } from '../api/api';
import { CardItem } from '../components/CardItem';
import { useDispatch } from 'react-redux';
import { Pagination } from '../components/Pagination/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../types/constants';
import { Product } from '../types/Product';
import { selectCurrentSort, setSort } from '../store/SortSlice';
import { sortStatus } from '../types/enums';
import { SortComponent } from '../components/SortComponent/SortComponent';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { Grid } from '../components/Grid/Grid';
import { GridItem } from '../components/Grid/GridItem';
import { CardItemSkeleton } from '../components/CardItem/CardItemSkeleton';
import { Title } from '../components/Title/Title';
import { motion } from 'framer-motion';
import { generateAnimation } from '../utils/animations';
import { selectItemsPerPage, setItemsPerPage } from '../store/perPageSlice';

export const ProductList = () => {
  const { category } = useParams();

  const [{ products, total, isLoaded }, setProducts] = useState<{
    products: Product[];
    total: number;
    isLoaded: boolean;
  }>({
    products: [],
    total: 0,
    isLoaded: false,
  });

  const loadProducts = (data: { total: number; products: Product[] }) => {
    setProducts({ products: data.products, total: data.total, isLoaded: true });
  };

  const currentSort = useSelector(selectCurrentSort);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const currentPageNumber = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const currentSort = searchParams.get('sort');
    const currentOrder = searchParams.get('order');

    const newSortStatus = sortStatus.find(
      (status) => status.sort === currentSort && status.order === currentOrder,
    );

    if (newSortStatus) {
      dispatch(setSort(newSortStatus));
    }
  }, [dispatch, searchParams]);

  const prevItemsPerPageRef = useRef(itemsPerPage);

  useEffect(() => {
    if (itemsPerPage !== prevItemsPerPageRef.current) {
      prevItemsPerPageRef.current = itemsPerPage;
      searchParams.set('page', '1');
    }
  }, [itemsPerPage, searchParams]);

  useEffect(() => {
    const perPageParam = parseInt(searchParams.get('perPage') || '16', 10);
    const validatedPerPage = Math.min(24, Math.max(4, perPageParam));

    if (itemsPerPage !== validatedPerPage) {
      dispatch(setItemsPerPage(validatedPerPage));
    }
  }, [searchParams, dispatch, itemsPerPage]);

  useEffect(() => {
    asyncGetAndSet(
      getProducts,
      loadProducts,
    )({
      category: category,
      page: currentPageNumber,
      perPage: itemsPerPage,
      sort: currentSort.sort,
      order: currentSort.order,
    });
  }, [isLoaded, dispatch, currentPageNumber, itemsPerPage, currentSort, category]);

  const title = useParams();

  const productTitle = title?.category
    ? title.category.charAt(0).toUpperCase() + title.category.slice(1)
    : '';

  const validPageNumber = isNaN(currentPageNumber) ? 1 : currentPageNumber;

  if (isLoaded) {
  }
  return (
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      <Grid>
        <GridItem>
          <div className="mb-[-20px]">
            <Breadcrumbs />
          </div>
        </GridItem>

        <GridItem>
          <Title title={productTitle} />
        </GridItem>

        <GridItem>
          <motion.p
            initial="hidden"
            transition={{ delay: 0.3, duration: 0.6 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            variants={generateAnimation('y', -50)}
            className="text-secondary text-xs font-semibold mb-10 mt-2 "
          >
            {total} models
          </motion.p>
        </GridItem>

        <GridItem>
          <SortComponent />
        </GridItem>
      </Grid>

      {isLoaded ? (
        <Grid>
          {products.map((product) => (
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
        totalProducts={total}
        productsPerPage={itemsPerPage}
        currentPageNumber={validPageNumber}
      />
    </div>
  );
};
