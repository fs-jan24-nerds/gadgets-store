import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { CartPage } from './pages/CartPage';
import { FavouritePage } from './pages/FavouritePage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate replace to="/" />} />
          <Route path="phones" element={<PhonesPage />} />
          <Route path="phones/:id" element={<PhonesPage />} />
          <Route path="favorites" element={<FavouritePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
