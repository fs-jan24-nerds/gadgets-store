import { Outlet } from 'react-router-dom';

import { ToastContainerWrapper } from '../ToastContainer';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainerWrapper />
      <Header />
      <main className="flex-1 bg-surface-0 pb-16 lg:pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
