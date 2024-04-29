import { useParams, Navigate, Outlet } from 'react-router-dom';

export const CategoryValidator = () => {
  const { category = '' } = useParams();
  const validCategories = ['phones', 'tablets', 'accessories'];

  if (!validCategories.includes(category)) {
    return <Navigate to="/not-found" replace />;
  }
  return <Outlet />;
};
