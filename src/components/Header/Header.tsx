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
    <header className="grid sticky top-0 z-10 bg-white grid-cols-12 w-full items-center border-b-2 border-elements justify-between font-mont-bold mb-6 lg:mb-8 xl:mb-14">
      <Link
        to={{ pathname: 'home', search: location.search }}
        className="w-32 h-16 flex items-center justify-center"
      >
        <img src={logo} alt="logo" className="mx-6" />
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
        className={`sm:grid col-start-1 col-span-12  sm:col-start-3 sm:col-span-13 justify-between hidden:sm ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <Navigation closeMenu={closeMenu} />
        <div className="flex col-end-12 items-center box-border justify-stretch sm:justify-center border-t-2">
          <NavLink
            to={{ pathname: 'favorites', search: location.search }}
            className="flex border-l-2 border-elements w-16 h-16 items-center flex-1 justify-center"
            onClick={closeMenu}
          >
            <img src={favourites} alt="favourites" className="w-6 h-6" />
          </NavLink>
          <NavLink
            to={{ pathname: 'cart', search: location.search }}
            className="flex border-elements border-l-2 w-16 h-16  items-center flex-1 justify-center"
            onClick={closeMenu}
          >
            <img src={cart} alt="cart" className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden col-end-12   ml-auto"></div>
    </header>
    // <header className="sticky top-0 z-10 bg-white w-full border-b-2 border-gray-300">
    //   <div className="flex items-center justify-between">
    //     <Link to="/" className="p-4">
    //       <img src={logo} alt="logo" />
    //     </Link>

    //     <button onClick={toggleMenu} className="p-4">
    //       {!isMenuOpen ? (
    //         <img src={BurgerMenu} alt="menu" />
    //       ) : (
    //         <img src={Close} alt="close" />
    //       )}
    //     </button>
    //   </div>
    //   <div
    //     className={`absolute w-full h-full bg-white z-20 transform transition-all ease-out duration-300 ${
    //       isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    //     }`}
    //   >
    //            <div
    //     className={`sm:grid col-start-3 col-end-13 justify-between hidden:sm ${isMenuOpen ? 'block' : 'hidden'}`}
    //   >
    //       {/* <nav className="flex flex-col items-center justify-center h-full"> */}
    //       <div
    //     className={`sm:grid col-start-3 col-end-13 justify-between hidden:sm ${isMenuOpen ? 'block' : 'hidden'}`}
    //    >
    //          <Navigation closeMenu={closeMenu} />
    //          <NavLink
    //         to={{ pathname: 'favorites', search: location.search }}
    //         className="flex border-l-2 border-elements w-16 h-16 items-center justify-center"
    //         onClick={closeMenu}
    //       >
    //         <img src={favourites} alt="favourites" className="w-6 h-6" />
    //       </NavLink>
    //       <NavLink
    //         to={{ pathname: 'cart', search: location.search }}
    //         className="flex border-elements border-l-2 w-16 h-16  items-center justify-center"
    //         onClick={closeMenu}
    //     >
    //       </NavLink>
    //       </div>
    //       </div>
    //     {/* </nav> */}
    //   </div>
    // </header>
  );
};
