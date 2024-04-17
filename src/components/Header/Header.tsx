import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="grid grid-cols-12 w-full items-center border-b-2 border-elements sm:justify-between font-mont-bold">
      <Link to="/" className="w-32 h-16 flex items-center justify-center">
        <img src="/img/icons/Logo.svg" alt="logo" />
      </Link>
      <div className="hidden sm:grid col-start-3 col-end-13 justify-between hidden:sm ">
        <Navigation />
        <div className="flex col-end-12 items-center box-border">
          <NavLink
            to="/favorites"
            className="flex border-collapse border-l-2 border-elements w-16 h-16 items-center justify-center"
          >
            <img src="/img/icons/favourites.svg" alt="favourites" className="w-6 h-6" />
          </NavLink>
          <NavLink
            to="/cart"
            className="flex border-elements border-l-2 w-16 h-16  items-center justify-center"
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
