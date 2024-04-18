import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

import Close from '../../assets/Close.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="grid grid-cols-12 w-full items-center border-b-2 border-elements font-mont-bold">
      <Link to="/" className="w-32 h-16 flex items-center justify-center">
        <img src="/img/icons/Logo.svg" alt="logo" />
      </Link>
      {/* Бургер-меню на мобільних екранах */}
      <div className="sm:hidden col-end-12 ml-auto">
        <button onClick={toggleMenu} className="w-6 h-6">
          {/* Іконка бургер-меню */}
          {!isMenuOpen ? (
            <img src="/img/icons/Menu.svg" alt="menu" className="w-6 h-6" />
          ) : (
            /* Іконка хрестика, коли меню відкрите */
            <img src={Close} alt="close" className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Навігація */}
      <div
        className={`sm:grid col-start-3 col-end-13 justify-between hidden:sm ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <Navigation closeMenu={closeMenu} />
        {/* Іконки */}
        <div className="flex col-end-12 items-center box-border sm: justify-center">
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
    </header>
  );
};
