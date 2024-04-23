import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavouritesPage } from './components/Favourites/FavouritesPage';
import CartPage from './components/Cart/CartPage';
import { ProductList } from './pages/ProductList';
import { ProductDetails } from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/gadgets-store/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate replace to="/gadgets-store/" />} />
        <Route path="favorites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path=":category">
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
