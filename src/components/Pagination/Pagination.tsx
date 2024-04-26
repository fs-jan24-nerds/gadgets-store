import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { generatePagination } from '../../utils/generatePagination';
import { getClassPaginate, stylePagesPagination } from '../../utils/getClass';
import cn from 'classnames';

type Props = {
  totalProducts: number;
  productsPerPage: number;
  currentPageNumber: number;
};

export const Pagination: React.FC<Props> = ({
  productsPerPage,
  totalProducts,
  currentPageNumber,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const { pathname } = useLocation();
  const isFirstPage = currentPageNumber <= 1;
  const isSecondPage = currentPageNumber >= totalPages;
  const [searchParams] = useSearchParams();

  const paginationRange = generatePagination(currentPageNumber, totalPages);
  const dots = '...';

  const updatedParams = (newPage: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set('page', newPage);
    return `${pathname}?${updatedSearchParams}`;
  };

  return (
    <div className="flex justify-center pt-10 pb-20">
      <ul className="flex gap-3">
        <Link
          to={updatedParams((currentPageNumber - 1).toString())}
          className={cn(
            'flex justify-center items-center w-8 h-8 border border-elements bg-surface-2',
            'mx-2',
            {
              'opacity-50 cursor-default pointer-events-none text-primary': isFirstPage,
            },
          )}
        >
          &lt;
        </Link>
        {paginationRange.map((number, i) => {
          const isDots = number === dots;
          if (isDots) {
            return (
              <span
                key={`p-${i}`}
                className={
                  stylePagesPagination +
                  'border-elements bg-surface-1 text-primary hover:text-white'
                }
              >
                {dots}
              </span>
            );
          }
          return (
            <NavLink
              key={`p-${i}`}
              to={updatedParams(number.toString())}
              className={getClassPaginate({ isActive: number === currentPageNumber })}
            >
              {number}
            </NavLink>
          );
        })}
        <Link
          to={updatedParams((currentPageNumber + 1).toString())}
          className={cn(
            'flex justify-center items-center w-8 h-8 border border-elements bg-surface-2',
            'mx-2',
            {
              'opacity-50 cursor-default pointer-events-none bg-surface-2 text-primary':
                isSecondPage,
            },
          )}
        >
          &gt;
        </Link>
      </ul>
    </div>
  );
};
