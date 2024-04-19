import { Category } from '../components/Category/Category';
import { SwiperComponent } from '../components/SwiperForModels/SwiperForModels';

export const HomePage = () => (
  <>
    <h1 className="text-5xl font-extrabold">Welcome to Nice Gadgets store!</h1>
    <section>
      <SwiperComponent />
      <Category />
    </section>
  </>
);
