import React from 'react';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='w-full bg-white py-32'>
      <div className='max-container px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold'>
            Students' <span className='text-primary-500'>Feedback</span>
          </h1>
          <p className='text-grey-500'>
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <Slider {...settings}>
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
