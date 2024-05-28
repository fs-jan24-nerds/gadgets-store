import { useEffect } from 'react';
import { getProducts } from '../api/api';
import { Category } from '../components/Category/Category';
import { SliderModels } from '../components/SliderModels/SliderModels';
import SliderPromo from '../components/SliderPromo/SliderPromo';
import { useUser } from '../components/Reg/UserContext';

const getter = async () => {
  const data = await getProducts({});
  return data.products;
};

export const HomePage = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (token && username && email) {
      setUser({ username, email, token });
    }
  }, [setUser]);

  return (
    <div className="mt-6 sm:mt-8 md:mt-14">
      <section className="max-w-max-width mx-auto box-content px-0 sm:px-6 lg:px-8">
        {user ? <div className="text-right">Hello, {user.username}!</div> : null}
        <SliderPromo />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels sectionTitle="Brand new models" getter={getter} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <Category />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels
          sectionTitle="Hot prices"
          getter={getter}
          prevButtonClass="slider2-prev"
          nextButtonClass="slider2-next"
        />
      </section>
    </div>
  );
};
