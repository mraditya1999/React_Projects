import Card from './Card';
import Slider from 'react-slick';
import { courses } from '../../data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className='bg-[#E9F8F3B2] py-32'>
      <div className='max-container px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold'>
            Most Popular <span className='text-primary-500'>Courses</span>
          </h1>
          <p className='text-grey-500'>
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <Slider {...settings} className='px-5'>
          {courses.map((course, i) => (
            <div key={i}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
