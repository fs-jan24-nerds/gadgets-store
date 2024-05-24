import { Navigate, Route, Routes } from 'react-router-dom';

import { FavouritesPage } from './components/Favourites/FavouritesPage';
import { ContactForm } from './components/Footer/Contcats';
import { Rights } from './components/Footer/Rights';
import { Layout } from './components/Layout';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import CartPage from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductList } from './pages/ProductList';

import './index.css';
import { CategoryValidator } from './pages/CategoryValidator';

import MainForm from './components/Reg/main-form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate replace to="/" />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path=":category" element={<CategoryValidator />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="contacts" element={<ContactForm />} />
        <Route path="rights" element={<Rights />} />
        <Route path="/auth" element={<MainForm />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="not-found" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
