import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { CartPage } from './pages/CartPage';
import { FavouritePage } from './pages/FavouritePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/gadgets-store/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate replace to="/gadgets-store/" />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="phones/:id" element={<PhonesPage />} />
          <Route path="favorites" element={<FavouritePage />} />
          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
