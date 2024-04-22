import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';
import { getClassNavLink } from '../../utils/getClass';

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

  return (
    <nav>
      <div
        className={`flex lg:gap-16 md:gap-8 sm:gap-4 md:p-t ${isMobile ? 'flex-col items-center md:h-screen h-full' : 'flex-row'}`}
      >
        {Object.values(NavMenu).map((menu) => (
          <NavLink
            key={menu}
            to={{ pathname: menu, search: location.search }}
            className={getClassNavLink}
            onClick={closeMenu}
          >
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
