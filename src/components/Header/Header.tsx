import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { useCartProducts } from '../../hooks/useCartProducts';
import { useAppSelector } from '../../store/store';
import { getClassNavLink } from '../../utils/getClass';

import logo from '../../assets/icons/Logo.svg';
import { SearchForm } from '../SearchForm/SearchForm';
import { ThemeSwitcherButton } from '../ThemeSwitcherButton/ThemeSwitcherButton';
import { FavoritsIcon } from '../Icons/FavoritsIcon';
import { CartIcon } from '../Icons/CartIcon';
import { BurgerIcon } from '../Icons/BurgerIcon';
import { LogoIcon } from '../Icons/LogoIcon';
import { FaUserPlus } from 'react-icons/fa';
import { CloseIcon } from '../Icons/CloseIcon';
import { Navigation } from './Navigation';

export const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { favouritesProducts } = useAppSelector((state) => state.favourites);

  const { cart } = useCartProducts();
  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.count, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700 && isMenuOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

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
    <header className="grid sticky top-0 z-10 bg-surface-0 grid-cols-10 w-full items-center border border-elements justify-between font-mont-bold">
      <Link
        to={{ pathname: 'home', search: location.search }}
        className="w-32 h-16 flex items-center justify-center"
      >
        <div className="relative">
          <LogoIcon />
          <img src={logo} alt="logo" className="absolute bottom-[16px] left-[19px] mx-6" />
        </div>
      </Link>
      <div className="flex tabletLarge:hidden col-end-13 ml-auto justify-center border-l border-l-elements w-16 h-16 items-center">
        <button onClick={toggleMenu} className="w-4">
          {!isMenuOpen ? (
            <BurgerIcon />
          ) : (
            <span className="text-primary font-inter-regular text-[16px]">
              <CloseIcon />
            </span>
          )}
        </button>
      </div>
      <div
        className={`tabletLarge:grid col-start-1 col-span-12 tabletLarge:col-start-3 tabletLarge:col-span-13 transition-opacity duration-1000 tabletLarge:visible tabletLarge:opacity-100 tabletLarge:h-auto justify-between ${isMenuOpen ? 'border-t-2 border-elements h-screen' : 'invisible opacity-0 h-0'}`}
      >
        <Navigation closeMenu={closeMenu} />

        <div
          className={`flex col-end-12 items-center box-border justify-stretch tabletLarge:justify-center ${isMenuOpen && 'fixed bottom-0 border-t-2 w-full border-elements'}`}
        >
          <ThemeSwitcherButton />

          <NavLink
            className={(props) =>
              `${getClassNavLink(props)} hover:border-b-primary border-l border-l-elements flex w-16 h-16 items-center flex-1 justify-center`
            }
            to="/auth"
          >
            {' '}
            <FaUserPlus />{' '}
          </NavLink>

          <SearchForm />

          <NavLink
            to={{ pathname: 'favourites', search: location.search }}
            className={(props) =>
              `${getClassNavLink(props)} hover:border-b-primary border-l border-l-elements flex w-16 h-16 items-center flex-1 justify-center`
            }
            onClick={closeMenu}
          >
            <div className="relative">
              <FavoritsIcon />
              {favouritesProducts.length > 0 && (
                <span
                  className="bg-red absolute rounded-full leading-none grid place-items-center
                   text-white text-[9px] w-[14px] h-[14px] top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
                >
                  {favouritesProducts.length}
                </span>
              )}
            </div>
          </NavLink>

          <NavLink
            to={{ pathname: 'cart', search: location.search }}
            className={(props) =>
              `${getClassNavLink(props)} hover:border-b-primary flex border-l-elements border-l w-16 h-16 items-center flex-1 justify-center`
            }
            onClick={closeMenu}
          >
            <div className="relative">
              <CartIcon />
              {totalItems > 0 && (
                <span
                  className="bg-red absolute rounded-full leading-none grid place-items-center
                 text-white text-[9px] w-[14px] h-[14px] top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
                >
                  {totalItems}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>

      <div className="md:hidden col-end-12  ml-auto"></div>
    </header>
  );
};
