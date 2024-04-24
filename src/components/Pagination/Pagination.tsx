import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { generatePagination } from '../../utils/generatePagination';
import { getClassPaginate } from '../../utils/getClass';
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

  const stylePagesPagination =
    'w-8 h-8 hover:border-primary flex border-box items-center border-2 border-elements justify-center text-primary';
  return (
    <div className="flex justify-center pt-10 pb-20">
      <ul className="flex gap-3">
        <Link
          to={`${pathname}?page=${currentPageNumber - 1}`}
          className={cn(stylePagesPagination, 'mx-2', {
            'opacity-50 cursor-default pointer-events-none': isFirstPage,
          })}
        >
          &lt;
        </Link>
        {paginationRange.map((number, i) => {
          const isDots = number === dots;
          if (isDots) {
            return (
              <span key={`p-${i}`} className={stylePagesPagination}>
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
          to={`${pathname}?page=${currentPageNumber + 1}`}
          className={cn(stylePagesPagination, 'mx-2', {
            'opacity-50 cursor-default pointer-events-none': isSecondPage,
          })}
        >
          &gt;
        </Link>
      </ul>
    </div>
  );
};
