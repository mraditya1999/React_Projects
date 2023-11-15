import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import sliderData from '../../utils/slider';
import { sliderSettings } from '../../utils/common';
import 'swiper/css';
import './Residencies.css';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='flexColStart r-head'>
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {sliderData.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flexColStart r-card'>
                  <img src={card.image} alt={card.name} />
                  <span className='secondaryText r-price'>
                    <span style={{ color: 'orange' }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='flexCenter r-buttons '>
      <button onClick={() => swiper.slidePrev()}>
        <FaChevronLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaChevronRight />
      </button>
    </div>
  );
};
