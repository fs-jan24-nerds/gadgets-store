import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="box-border max-w-max-width mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
