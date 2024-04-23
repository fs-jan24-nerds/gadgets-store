import { useDispatch } from 'react-redux';
import { setSort } from '../../store/SortSlice';

import { SortStatus } from '../../types/enums';
import { SortDropdown } from './SortDropdown';
import { useSearchParams } from 'react-router-dom';

export const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get('sort') as SortStatus | null;

  const handleFilterChange = (selectedSort: SortStatus) => {
    dispatch(setSort(selectedSort));
    setSearchParams({ sort: selectedSort });
  };

  return (
    <div className="mb-6">
      <p className="text-secondary text-xs font-bold mb-1 ">Sort by</p>
      <SortDropdown
        options={Object.values(SortStatus)}
        onSelect={handleFilterChange}
        initialOption={currentSort ?? Object.values(SortStatus)[0]}
      />
    </div>
  );
};
