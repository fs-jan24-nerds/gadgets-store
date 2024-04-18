import { Link, NavLink, useLocation } from 'react-router-dom';
import { generatePagination } from '../../utils/generatePagination';

type Props = {
  totalProducts: number;
  productsPerPage: number;
  currentPageNumber: string;
};

export const Pagination: React.FC<Props> = ({
  productsPerPage,
  totalProducts,
  currentPageNumber,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const { pathname } = useLocation();

  const pagesNumbers = [];
  for (let i = 1; i < totalPages; i++) {
    pagesNumbers.push(i);
  }
  const fourBtns = generatePagination(1, pagesNumbers.length);

  const stylePagesPagination =
    'w-8 h-8 flex border-box items-center border-2 border-elements justify-center text-primary';
  return (
    <ul className="flex gap-3">
      <div className="w-4 h-4">
        <Link
          to={{
            pathname,
            search: `?page=${+currentPageNumber - 1}`,
          }}
          className={`${stylePagesPagination} mr-2`}
        >
          &lt;
        </Link>
      </div>
      {fourBtns.map((number, i) => (
        <NavLink
          key={`p-${i}`}
          to={{
            pathname,
            search: `?page=${number}`,
          }}
          className={stylePagesPagination}
        >
          {number}
        </NavLink>
      ))}
      <NavLink
        to={{
          pathname,
          search: `?page=${+currentPageNumber + 1}`,
        }}
        className={stylePagesPagination}
      >
        &gt;
      </NavLink>
    </ul>
  );
};
