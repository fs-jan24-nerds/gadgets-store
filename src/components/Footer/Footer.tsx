import Logo from '../../assets/icons/Logo.svg';
import ToTop from '../../assets/icons/to-top-arrow.svg';

export function Footer() {
  return (
    <footer className="flex border border-elements mt-16 lg:mt-20  px-4 sm:px-8">
      <div className="w-max-width mx-auto md:flex md:justify-between md:items-center">
        <img src={Logo} alt="Logo" className="mt-8 mr-0 md:mr-0 md:mb-4 mb-7" />

        <div className="md:flex md:items-center">
          <a href="#" className="block mb-0 text-secondary mr-24">
            GitHub
          </a>

          <a href="#" className="block mb-0 text-secondary font-extrabold mr-24">
            <p className="font-bold">Contacts</p>
          </a>

          <a href="#" className="block mb-0 text-secondary">
            Rights
          </a>
        </div>

        <button className="flex gap-8 justify-center w-full md:w-auto items-center mb-8 md:mb-0 mt-8 md:mt-0">
          <p>Back to top</p>
          <div className="flex justify-center items-center w-8 h-8 border border-elements">
            <img src={ToTop} alt="" className="" />
          </div>
        </button>
      </div>
    </footer>
  );
}
