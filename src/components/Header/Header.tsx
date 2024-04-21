import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';

import Close from '../../assets/Close.svg';
import BurgerMenu from '../../assets/icons/Menu.svg';
import favourites from '../../assets/icons/favourites.svg';
import cart from '../../assets/icons/cart.svg';
import logo from '../../assets/icons/Logo.svg';

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 bg-white grid grid-cols-12 w-full items-center border border-elements sm:justify-between font-mont-bold mb-6 lg:mb-8 xl:mb-14">
      <Link
        to={{ pathname: 'home', search: location.search }}
        className="w-32 h-16 flex items-center justify-center"
      >
        <img src={logo} alt="logo" />
      </Link>
      {/* Бургер-меню на мобільних екранах */}
      <div className="sm:hidden col-end-13 ml-auto">
        <button onClick={toggleMenu} className="w-6 h-6">
          {!isMenuOpen ? (
            <img src={BurgerMenu} alt="menu" className="w-6 h-6" />
          ) : (
            <img src={Close} alt="close" className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Навігація */}
      <div
        className={`sm:grid col-start-3 col-end-13 justify-between hidden:sm ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <Navigation closeMenu={closeMenu} />
        <div className="flex col-end-12 items-center box-border sm: justify-center">
          <NavLink
            to={{ pathname: 'favorites', search: location.search }}
            className="flex border-collapse border-l border-elements w-16 h-16 items-center justify-center"
            onClick={closeMenu}
          >
            <img src={favourites} alt="favourites" className="w-6 h-6" />
          </NavLink>
          <NavLink
            to={{ pathname: 'cart', search: location.search }}
            className="flex border-l border-elements w-16 h-16  items-center justify-center"
            onClick={closeMenu}
          >
            <img src={cart} alt="cart" className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden col-end-12   ml-auto"></div>
    </header>
  );
};
