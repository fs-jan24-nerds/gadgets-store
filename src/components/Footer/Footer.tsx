import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.svg';
import ToTop from '../../assets/icons/to-top-arrow.svg';

export function Footer() {
  return (
    <footer className="flex border border-elements mt-16 lg:mt-20  px-4 sm:px-8">
      <div className="w-max-width mx-auto md:flex md:justify-between md:items-center">
        <img src={Logo} alt="Logo" className="mt-8 mr-0 md:mr-0 md:mb-4 mb-7" />

        <div className="md:flex md:items-center">
          <Link to="https://github.com/fs-jan24-nerds/gadgets-store" className="block mb-0 text-secondary mr-24">
            GitHub
          </Link>

          <Link to={{ pathname: 'contacts' }} className="block mb-0 text-secondary font-extrabold mr-24">
            <p className="font-bold">Contacts</p>
          </Link>

          <Link to={{ pathname: 'rights' }} className="block mb-0 text-secondary">
            Rights
          </Link>
        </div>

        <a className="flex gap-8 justify-center w-full md:w-auto items-center mb-8 md:mb-0 mt-8 md:mt-0 cursor-pointer" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>          
            <p>Back to top</p>
          <div className="flex justify-center items-center w-8 h-8 border border-elements">
            <img src={ToTop} alt="" className="" />
          </div>
        </a>
      </div>
    </footer>
  );
}
