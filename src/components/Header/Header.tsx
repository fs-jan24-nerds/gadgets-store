import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';
import favourites from '../../assets/icons/favourites.svg';
import cart from '../../assets/icons/cart.svg';
import logo from '../../assets/icons/Logo.svg';
import burgerMenu from '../../assets/icons/Menu.svg';

const getClassIcon = () => {
  return'border-l-2 border-gray w-16 h-16 flex items-center justify-center';
};

export const Header = () => {
  return (
    <header className="grid grid-cols-12 w-full items-center border-b-2 border-gray justify-between:sm">
      <Link to="/" className="w-32 h-16 flex items-center justify-center">
        <img src={logo} alt="logo" />
      </Link>
      <div className="hidden sm:grid col-start-3 col-end-13 justify-between hidden:sm ">
        <Navigation />
        <div className="flex col-end-12 items-center">
          <NavLink
            to="/favorites"
            className={getClassIcon}
          >
            <img src={favourites} alt="favourites" className="w-6 h-6" />
          </NavLink>
          <NavLink
            to="/cart"
            className={getClassIcon}
          >
            <img src={cart} alt="cart" className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden col-end-12 ml-auto">
        <NavLink to="/">
          <img src={burgerMenu} alt="menu" className="w-6 h-6" />
        </NavLink>
      </div>
    </header>
  );
};
