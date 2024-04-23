import { Link, useLocation } from 'react-router-dom';

import Home from '../../assets/Home.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';

export const Breadcrumbs: React.FC<{ categoryName: string }> = ({ categoryName }) => {
  const location = useLocation();

  let currentURL = '';

  const breadcrumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, arr) => {
      currentURL += `/${crumb}`;

      if (crumb === 'gadgets-store') {
        return (
          <div key={crumb} className="inline-block">
            <Link to={currentURL}>
              <img src={Home} alt="Home page" className="inline-block" />
            </Link>
            <img src={rightArrow} alt="Go back" className="inline-block mx-2" />
          </div>
        );
      }

      crumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

      if (index === arr.length - 1) {
        return (
          <Link to={currentURL} key={crumb} className="text-secondary cursor-default">
            {categoryName}
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

  return <div className="mb-6 md:mb-10 mt-6">{breadcrumbs}</div>;
};
