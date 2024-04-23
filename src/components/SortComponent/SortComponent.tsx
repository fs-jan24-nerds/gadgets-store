import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSort, setSort } from '../../store/SortSlice';
import { ChangeEvent } from 'react';
import { SortStatus } from '../../types/enums';

export const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector(selectCurrentSort);

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value as SortStatus;
    dispatch(setSort(selectedSort));
  };

  return (
    <div>
      <p className="text-secondary text-xs font-bold mb-1 ">Sort by</p>
      <select
        value={currentSort}
        onChange={handleFilterChange}
        className="border-2 w-[176px] h-10 mb-6 text-sm font-bold pl-3"
      >
        {Object.values(SortStatus).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};
