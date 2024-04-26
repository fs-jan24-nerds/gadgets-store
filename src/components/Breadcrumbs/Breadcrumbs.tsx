import { Link, useLocation } from 'react-router-dom';

import Home from '../../assets/Home.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import React from 'react';

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
          <Link to={currentURL} key={crumb} className=" text-secondary cursor-default">
            {crumb}
          </Link>
        );
      }

      return (
        <React.Fragment key={crumb}>
          <Link to={currentURL} className="text-textMain">
            {crumb}
          </Link>
          <img src={rightArrow} alt="Go back" className=" mx-2" />
        </React.Fragment>
      );
    });

  return (
    <div className="flex items-center mb-6 md:mb-10 mt-6 font-inter-regular">
      <Link to={'/'} className="block">
        <img src={Home} alt="Home page" />
      </Link>
      <img src={rightArrow} alt="Go back" className=" mx-2" />
      {breadcrumbs}
    </div>
  );
};
