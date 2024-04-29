import { useNavigate } from 'react-router-dom';

import notfound404 from '../assets/product-not-found.png';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('gadgets-store/');

  return (
    <div className="lg:px-24 lg:py-24 md:py-10 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-20 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div>
          <h1 className="my-2 text-primary font-bold text-2xl">
            Looks like you&apos;ve found the doorway to the great nothing
          </h1>
          <p className="my-2 text-secondary">
            Sorry about that! Please visit our hompage to get where you need to go.
          </p>
          <button
            onClick={handleClick}
            className="w-44 h-10 sm:w-full lg:w-auto md px-8 text-center bg-primary text-white focus:outline-none hover:shadow-[0_3px_13px_rgba(49,50,55,0.4)]"
          >
            Take me there!
          </button>
        </div>
      </div>
      <div>
        <img src={notfound404} />
      </div>
    </div>
  );
};
