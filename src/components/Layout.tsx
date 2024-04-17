import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container p-5 max-w-md bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
