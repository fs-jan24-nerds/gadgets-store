import { Category } from '../components/Category/Category';
import SliderPromo from '../components/PromoSlider/SliderPromo';

export const HomePage = () => (
  <>
    <h1 className="text-5xl font-extrabold">Welcome to Nice Gadgets store!</h1>
    <section>
      <SliderPromo />
      <Category />
    </section>
  </>
);
