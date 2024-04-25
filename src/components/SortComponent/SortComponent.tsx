import { useDispatch } from 'react-redux';
import { setSort } from '../../store/SortSlice';

import { SortStatus } from '../../types/enums';
import { SortDropdown } from './SortDropdown';
import { useSearchParams } from 'react-router-dom';
import { setItemsPerPage } from '../../store/perPageSlice';

const pageSizeOptions = [4, 8, 16, 24];
// const MAX_ITEMS_PER_PAGE = pageSizeOptions[pageSizeOptions.length - 1];

export const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get('sort') as SortStatus | null;

  const currentPerPage = searchParams.get('perPage') as number | null;

  const handleFilterChange = (selectedSort: SortStatus) => {
    dispatch(setSort(selectedSort));
    setSearchParams({
      ...Object.fromEntries(searchParams),
      sort: selectedSort,
    });
  };

  const handlePerPageChange = (selectedPerPage: number) => {
    dispatch(setItemsPerPage(selectedPerPage));
    setSearchParams({
      ...Object.fromEntries(searchParams),
      perPage: selectedPerPage.toString(),
    });
  };

  return (
    <div className="mb-6 flex space-x-4 ">
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
    </div>
  );
};
