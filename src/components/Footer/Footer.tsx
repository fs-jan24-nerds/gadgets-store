import Logo from '../../assets/Logo.png';
import ToTop from '../../assets/Back to top button.png';

export function Footer() {
  return (
    <footer className="fixed bottom-4 md:flex md:justify-between md:items-center">
      <img src={Logo} alt="Logo" className="h-6 mr-5" />
      <div className="md:flex md:items-center">
        <a href="#" className="mx-5 block" style={{ color: '#89939A' }}>
          GitHub
        </a>
        <a href="#" className="mx-5 block" style={{ color: '#89939A' }}>
          Contacts
        </a>
        <a href="#" className="mx-5 block" style={{ color: '#89939A' }}>
          Rights
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a href="#" className="block pr-2 ml-5" style={{ color: '#89939A' }}>
          <img src={ToTop} alt="" />
        </a>
      </div>
    </footer>
  );
}
