import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <>
    <h1 className="text-lg">Page not found</h1>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </>
);
