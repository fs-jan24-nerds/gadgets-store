import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { ToastContainerWrapper } from '../ToastContainer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainerWrapper />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
