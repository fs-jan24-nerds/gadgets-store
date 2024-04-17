import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
