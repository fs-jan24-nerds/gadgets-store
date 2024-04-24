import { useDispatch } from 'react-redux';
import { setSort } from '../../store/SortSlice';

import { SortStatus } from '../../types/enums';
import { SortDropdown } from './SortDropdown';
import { useSearchParams } from 'react-router-dom';
import { ItemsDropdown } from './ItemDropdow';
import { LIMITS } from '../../types/constants';

export const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get('sort') as SortStatus | null;

  const handleFilterChange = (selectedSort: SortStatus) => {
    dispatch(setSort(selectedSort));
    setSearchParams({ sort: selectedSort });
  };

  const handleLimitChange = (selectedLimit: string) => {
    setSearchParams({ limit: selectedLimit });
  };

  return (
    <div className="flex mb-6 gap-4">
      <div className="">
        <p className="text-secondary text-xs font-bold mb-1">Sort by</p>
        <SortDropdown
          options={Object.values(SortStatus)}
          onSelect={handleFilterChange}
          initialOption={currentSort ?? Object.values(SortStatus)[0]}
        />
      </div>

      <div className="">
        <p className="text-secondary text-xs font-bold mb-1">Items on page</p>

        <ItemsDropdown
          options={LIMITS}
          onSelect={handleLimitChange}
          initialOption={Number(LIMITS[1])}
        />
      </div>
    </div>
  );
};
