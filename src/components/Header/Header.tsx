import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="grid grid-cols-12 items-center">
      <Link to="/">
        <img src="/img/icons/Logo.svg" alt="logo" className="" />
      </Link>
      <div className="col-span-8 flex justify-end hidden sm:flex ">
        <Navigation />
        <div className="flex ">
          <NavLink to="/favorites" className="w-6 h-6">
            <img src="/img/icons/favourites.png" alt="favourites" />
          </NavLink>
          <NavLink to="/cart" className="w-6 h-6">
            <img src="/img/icons/cart.png" alt="cart" />
          </NavLink>
        </div>
      </div>
      <div className="flex sm:hidden">
        <NavLink to="/">
          <img src="/img/icons/menu.png" alt="menu" className="w-6 h-6" />
        </NavLink>
      </div>
    </header>
  );
};
