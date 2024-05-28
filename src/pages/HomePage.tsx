import { getHot } from '../api/api';
import { Category } from '../components/Category/Category';
import { SliderModels } from '../components/SliderModels/SliderModels';
import SliderPromo from '../components/SliderPromo/SliderPromo';

export const HomePage = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-14">
      <section className="max-w-max-width mx-auto box-content px-0 sm:px-6 lg:px-8">
        <SliderPromo />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels sectionTitle="Brand new models" getter={getHot} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <Category />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels
          sectionTitle="Hot prices"
          getter={getHot}
          prevButtonClass="slider2-prev"
          nextButtonClass="slider2-next"
        />
      </section>
    </div>
  );
};
