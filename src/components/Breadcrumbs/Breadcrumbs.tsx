import { Link, useLocation } from 'react-router-dom';

import Home from '../../assets/Home.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';

const preparedCategoryName = (categoryName: string) => {
  return categoryName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentURL = '';

  const breadcrumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, arr) => {
      currentURL += `/${crumb}`;

      crumb = preparedCategoryName(crumb);

      if (index === arr.length - 1) {
        return (
          <Link to={currentURL} key={crumb} className="text-secondary cursor-default">
            {crumb}
          </Link>
        );
      }

      return (
        <div key={crumb} className="inline-block">
          <Link to={currentURL}>{crumb}</Link>
          <img src={rightArrow} alt="Go back" className="inline-block mx-2" />
        </div>
      );
    });

  return (
    <div className="mb-6 md:mb-10 mt-6">
      <div className="inline-block">
        <Link to={'/'}>
          <img src={Home} alt="Home page" className="inline-block" />
        </Link>
        <img src={rightArrow} alt="Go back" className="inline-block mx-2" />
      </div>
      {breadcrumbs}
    </div>
  );
};
