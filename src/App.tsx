import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavouritesPage } from './components/Favourites/FavouritesPage';
import CartPage from './components/Cart/CartPage';
import { ProductList } from './pages/ProductList';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ContactForm } from './components/Footer/Contcats';
import { Rights } from './components/Footer/Rights';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate replace to="/" />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path=":category">
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="contacts" element={<ContactForm />} />
        <Route path="rights" element={<Rights />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
