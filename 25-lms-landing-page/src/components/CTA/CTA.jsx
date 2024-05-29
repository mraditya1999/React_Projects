import { cta } from '../../assets';
import { ButtonPrimary } from '../shared/Button';

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3] py-24'>
      <div className='max-container grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
        <img src={cta} className='w-[650px] mx-auto' />

        <div>
          <h1 className='py-2  text-3xl font-semibold'>
            Join <span className='text-primary-500'>World's largest</span>{' '}
            learning platform today{' '}
          </h1>
          <p className='py-2 text-lg text-gray-600'>
            Start learning by registering for free
          </p>
          <ButtonPrimary
            className='max-[780px]:w-full my-4 py-5'
            text='Sign Up For Free'
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
