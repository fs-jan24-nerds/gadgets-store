import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCartProducts } from '../../hooks/useCartProducts';
import { useAppSelector } from '../../store/store';
import { Navigation } from './Navigation';

import Close from '../../assets/Close.svg';
import logo from '../../assets/icons/Logo.svg';
import BurgerMenu from '../../assets/icons/Menu.svg';
import cartIcon from '../../assets/icons/cart.svg';
import favourites from '../../assets/icons/favourites.svg';
import { getClassNavLink } from '../../utils/getClass';

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { favouritesProducts } = useAppSelector((state) => state.favourites);

  const { cart } = useCartProducts();
  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.count, 0);

  const toggleMenu = () => {
    isMenuOpen ? closeMenu() : openMenu();
  };

  const closeMenu = () => {
    document.body.classList.remove('overflow-hidden');
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    document.body.classList.add('overflow-hidden');
    setIsMenuOpen(true);
  };

  return (
    <header className="grid sticky top-0 z-10 bg-white grid-cols-10 w-full items-center border-b-2 md:border-t-2 max-xs:border-transparent border-elements justify-between font-mont-bold">
      <Link
        to={{ pathname: 'home', search: location.search }}
        className="w-32 h-16 flex items-center justify-center"
      >
        <img src={logo} alt="logo" className="mx-6" />
      </Link>
      <div className="flex sm:hidden col-end-13 ml-auto justify-center border-l-2 w-16 h-16 items-center ">
        <button onClick={toggleMenu} className="w-6 h-6">
          {!isMenuOpen ? (
            <img src={BurgerMenu} alt="menu" className="w-6 h-6" />
          ) : (
            <img src={Close} alt="close" className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`sm:grid col-start-1 col-span-12 sm:col-start-3 sm:col-span-13 justify-between hidden:sm ${isMenuOpen ? 'block border-t-2 border-elements' : 'hidden'}`}
      >
        <Navigation closeMenu={closeMenu} />
        <div
          className={`flex col-end-12 items-center box-border justify-stretch sm:justify-center ${isMenuOpen && 'border-t-2 border-elements'}`}
        >
          <NavLink
            to={{ pathname: 'favorites', search: location.search }}
            className={(props) =>
              `${getClassNavLink(props)} hover:border-b-primary border-l-2 border-l-elements flex w-16 h-16 items-center flex-1 justify-center`
            }
            onClick={closeMenu}
          >
            <div className="relative">
              <img src={favourites} alt="favourites" className="w-6 h-6" />
              {favouritesProducts.length > 0 && (
                <span
                  className="bg-red absolute rounded-full leading-none grid place-items-center
                   text-white w-[18px] h-[18px] top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
                >
                  {favouritesProducts.length}
                </span>
              )}
            </div>
          </NavLink>
          <NavLink
            to={{ pathname: 'cart', search: location.search }}
            className={(props) =>
              `${getClassNavLink(props)} hover:border-b-primary flex border-l-elements border-l-2 w-16 h-16 items-center flex-1 justify-center`
            }
            onClick={closeMenu}
          >
            <div className="relative">
              <img src={cartIcon} alt="cart" className="w-6 h-6" />
              {totalItems > 0 && (
                <span
                  className=" bg-red absolute rounded-full leading-none grid place-items-center
              text-white w-[18px] h-[18px] top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
                >
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
      <div className="sm:hidden col-end-12   ml-auto"></div>
    </header>
  );
};
