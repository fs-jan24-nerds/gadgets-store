import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavMenu } from '../../types/enums';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const getClass = ({ isActive }: { isActive: boolean }) =>
    classNames('gap-1 text-', { primary: isActive });

  return (
    <nav>
      <div className="flex justify space-x-4 ">
        {Object.values(NavMenu).map((menu) => (
          <NavLink key={menu} to={{ pathname: menu, search: location.search }} className={getClass}>
            {menu.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
