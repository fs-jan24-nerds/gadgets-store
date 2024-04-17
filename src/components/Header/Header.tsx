import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="grid grid-cols-12 w-full items-center border-b-2 border-gray justify-between:sm">
      <Link to="/" className="block  w-32 h-16 flex items-center justify-center">
        <img src="/img/icons/Logo.svg" alt="logo" />
      </Link>
      <div className="hidden sm:grid col-start-3 col-end-13 flex justify-between hidden:sm ">
        <Navigation />
        <div className="flex col-end-12 items-center">
          <NavLink
            to="/favorites"
            className="block border-2 border-gray w-16 h-16 flex items-center justify-center"
          >
            <img src="/img/icons/favourites.svg" alt="favourites" className="w-6 h-6" />
          </NavLink>
          <NavLink
            to="/cart"
            className="block border-2 border-gray border-l-none w-16 h-16 flex items-center justify-center"
          >
            <img src="/img/icons/cart.svg" alt="cart" className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden col-end-12   ml-auto">
        <NavLink to="/">
          <img src="/img/icons/Menu.svg" alt="menu" className="w-6 h-6" />
        </NavLink>
      </div>
    </header>
  );
};
