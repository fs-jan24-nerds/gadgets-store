import { useNavigate } from 'react-router-dom';

import notfound404 from '../assets/product-not-found.png';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <div className="max-w-max-width mx-auto box-content px-0 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-6 lg:space-y-0 my-12">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold text-primary">
            Looks like you&apos; found the doorway to the great nothing
          </h1>
          <p className="text-secondary">
            Sorry about that! Please visit our homepage to get where you need to go.
          </p>
          <button
            onClick={handleClick}
            className="w-full sm:w-auto px-6 py-2 bg-accent hover:bg-accent-hover duration-300 text-white font-bold"
          >
            Take me there!
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src={notfound404} alt="Product not found" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};
