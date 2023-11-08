import { heroImg } from '../../assets';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='bg-white py-24'>
      <div className='max-container grid md:grid-cols-2 px-4 md:px-0'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='py-2 text-2xl text-primary-500 font-medium'>
            START TO SUCCESS
          </p>
          <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>
            Access To <span className='text-primary-500'>5000+</span> Courses
            from <span className='text-primary-500'>300</span> Instructors &
            Institutions
          </h1>
          <p className='py-2 text-lg text-grey-500'>
            Various versions have evolved over the years, sometimes by accident.
          </p>

          <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
            <input
              className='bg-white text-grey-500 outline-gray-300  border-transparent focus:outline-none w-full'
              type='text'
              placeholder='What do want to learn?'
            />
            <button>
              <AiOutlineSearch size={20} className='icon  text-grey-600' />
            </button>
          </form>
        </div>

        <img src={heroImg} className='md:order-last  order-first' />
      </div>
    </div>
  );
};
export default Hero;
