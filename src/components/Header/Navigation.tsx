import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';
import { getClassNavLink } from '../../utils/getClass';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="flex justify-between lg:gap-16 gap-8">
        {Object.values(NavMenu).map((menu) => (
          <NavLink
            key={menu}
            to={{ pathname: menu, search: location.search }}
            className={getClassNavLink}
          >
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
