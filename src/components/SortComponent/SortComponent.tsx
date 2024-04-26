import { useDispatch } from 'react-redux';
import { setSort } from '../../store/SortSlice';

import { SortStatus } from '../../types/enums';
import { SortDropdown } from './SortDropdown';
import { useSearchParams } from 'react-router-dom';
import { setItemsPerPage } from '../../store/perPageSlice';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';

const pageSizeOptions = [4, 8, 16, 24];
const MAX_ITEMS_PER_PAGE = pageSizeOptions[pageSizeOptions.length - 1];
const MIN_ITEMS_PER_PAGE = pageSizeOptions[0];

export const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get('sort') as SortStatus | null;

  let currentPerPage = searchParams.get('perPage') as number | null;

  if (currentPerPage) {
    if (currentPerPage > MAX_ITEMS_PER_PAGE) {
      currentPerPage = MAX_ITEMS_PER_PAGE;
    }
  }

  const handleFilterChange = (selectedSort: SortStatus) => {
    dispatch(setSort(selectedSort));
    setSearchParams({
      ...Object.fromEntries(searchParams),
      sort: selectedSort,
    });
  };

  const handlePerPageChange = (selectedPerPage: number) => {
    const validatedPerPage = Math.min(
      MAX_ITEMS_PER_PAGE,
      Math.max(MIN_ITEMS_PER_PAGE, selectedPerPage),
    );

    dispatch(setItemsPerPage(validatedPerPage)); // Надсилаємо в Redux
    setSearchParams({
      ...Object.fromEntries(searchParams),
      perPage: validatedPerPage.toString(), // Оновлюємо в URL параметрах
    });
  };

  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 0.3, duration: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="mb-6 flex space-x-4 "
    >
      <div className="w-[136px] md:w-[176px]">
        <p className="text-secondary text-xs font-bold mb-1 ">Sort by</p>
        <SortDropdown
          options={Object.values(SortStatus)}
          onSelect={handleFilterChange}
          initialOption={currentSort ?? Object.values(SortStatus)[0]}
        />
      </div>

      <div className="w-[136px]">
        <p className="text-secondary text-xs font-bold mb-1 ">Items on page</p>
        <SortDropdown
          options={pageSizeOptions}
          onSelect={handlePerPageChange}
          initialOption={currentPerPage ?? pageSizeOptions[2]}
        />
      </div>
    </motion.div>
  );
};
