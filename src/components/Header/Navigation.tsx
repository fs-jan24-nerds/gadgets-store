import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NavMenu } from '../../types/enums';
import { getClassNavLink } from '../../utils/getClass';

interface NavigationProps {
  closeMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div
        className={`flex lg:gap-16 md:gap-8 sm:gap-4 md:p-t ${isMobile ? 'flex-col items-center ' : 'flex-row'}`}
      >
        {Object.values(NavMenu).map((menu) => (
          <NavLink
            key={menu}
            to={{ pathname: menu }}
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
