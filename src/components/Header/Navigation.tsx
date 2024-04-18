import classNames from 'classnames';
import styles from './Navigation.module.css';

import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';

import React, { useState, useEffect } from 'react';

interface NavigationProps {
  closeMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      `${styles.navlink} hover:border-b-4 border-primary font-bold tracking-wide leading-3 flex lg:flex-row`,
      { 'navlink-active': isActive, '${styles} text-secondary relative': !isActive },
    );

  return (
    <nav>
      <div
        className={`flex lg:gap-16 gap-8 ${isMobile ? 'flex-col items-center h-screen' : 'flex-row'}`}
      >
        {Object.values(NavMenu).map((menu) => (
          <NavLink
            key={menu}
            to={{ pathname: menu, search: location.search }}
            className={getClass}
            onClick={closeMenu}
          >
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
