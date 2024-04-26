import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import ToTop from '../../assets/icons/to-top-arrow.svg';
import { LogoIcon } from '../Icons/LogoIcon';

export function Footer() {
  return (
    <footer className="flex items-center bg-surface-0 border border-elements px-4 sm:px-8">
      <div className="w-max-width mx-auto md:flex md:justify-between md:items-center">
        <div className="relative mt-8 mr-0 md:mr-0 md:mb-4 mb-7">
          <LogoIcon />
          <img src={logo} alt="logo" className="absolute bottom-[16px] left-[19px] mx-6" />
        </div>

        <div className="md:flex md:items-center">
          <Link
            to="https://github.com/fs-jan24-nerds/gadgets-store"
            className="block mb-0 text-textSecondary mr-24"
          >
            GitHub
          </Link>

          <Link
            to={{ pathname: 'contacts' }}
            className="block mb-0 text-textSecondary font-extrabold mr-24"
          >
            <p className="font-bold">Contacts</p>
          </Link>

          <Link to={{ pathname: 'rights' }} className="block text-textSecondary mb-0">
            Rights
          </Link>
        </div>
        <a
          className="flex gap-8 justify-center w-full md:w-auto items-center mb-8 md:mb-0 mt-8 md:mt-0 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <p className="text-textMain">Back to top</p>
          <div className="flex justify-center items-center bg-surface-2 w-8 h-8 border border-elements">
            <img src={ToTop} alt="back to top" />
          </div>
        </a>
      </div>
    </footer>
  );
}
