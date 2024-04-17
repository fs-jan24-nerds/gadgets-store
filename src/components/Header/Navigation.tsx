import classNames from 'classnames';
import styles from './Navigation.module.css';

import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const getClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      `${styles.navlink} hover:border-b-4 border-primary font-bold tracking-wide leading-3 flex lg:flex-row`,
      { 'navlink-active': isActive, '${styles} text-secondary relative': !isActive },
    );

  return (
    <nav>
      <div className="flex justify space-x-6 gap-16 px-6 font-mont-bold items-center">
        {Object.values(NavMenu).map((menu) => (
          <NavLink key={menu} to={{ pathname: menu, search: location.search }} className={getClass}>
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
