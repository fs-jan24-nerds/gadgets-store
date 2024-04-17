import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const getClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'navlink hover:border-b-4 border-primary font-bold tracking-wide leading-3 flex flex-col  sm:flex-row ',
      { 'navlink-active': isActive, 'text-secondary relative': !isActive },
    );
  return (
    <nav>
      <div className="flex justify   sm:space-x-8 md:space-x-16">
        {Object.values(NavMenu).map((menu) => (
          <NavLink key={menu} to={{ pathname: menu, search: location.search }} className={getClass}>
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
