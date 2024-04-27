import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider3 from '../../assets/SliderPromo/sleder3.jpeg';
import Slider1 from '../../assets/SliderPromo/slider1.jpg';
import Slider2 from '../../assets/SliderPromo/slider2.jpeg';
import Slider4 from '../../assets/SliderPromo/slider4.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './SliderPromo.module.css';
import { Title } from '../Title/Title';

import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';
import { sliderLeftArrow, sliderRightArrow } from '../../assets/SVGIcons';

const SliderPromo = () => {
  return (
    <div>
      <div className="ml-4 sm:ml-0">
        <Title title="Welcome to Nice Gadgets store!" />
      </div>

      <motion.div
        initial="hidden"
        transition={{ delay: 0.2, duration: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={generateAnimation('y', -50)}
        className="flex flex-col items-center max-w-full mt-6 lg:mt-8 xl:mt-14 mb-14 lg:mb-16 xl:mb-20"
      >
        <div className="flex gap-4 w-full mb-8">
          <button
            className={`${styles.leftArrow} flex items-center justify-center  bg-surface-2 border border-elements`}
          >
            {sliderLeftArrow}
          </button>

          <Swiper
            className="max-w-[1040px]"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: `.${styles.leftArrow}`,
              nextEl: `.${styles.rightArrow}`,
            }}
            pagination={{
              clickable: true,
              el: '.pagination',
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1500}
            slidesPerView={1}
            spaceBetween={25}
          >
            <SwiperSlide>
              <img src={Slider1} className={styles.slide} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Slider2} className={styles.slide} alt="Slide 2" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Slider3} className={styles.slide} alt="Slide 3" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Slider4} className={styles.slide} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>

          <button
            className={`${styles.rightArrow} flex items-center justify-center bg-surface-2 border border-elements`}
          >
            {sliderRightArrow}
          </button>
        </div>
        <div className="pagination flex justify-center items-center gap-4"></div>
      </motion.div>
    </div>
  );
};

export default SliderPromo;
