import { achievement } from '../../assets';
import { achievements } from '../../data';
import AchievementCard from './AchievementCard';

const Achievement = () => {
  return (
    <div className=' bg-white py-24'>
      <div className='max-container grid md:grid-cols-2 px-4 md:px-0'>
        <div className='flex flex-col justify-center '>
          <h1 className='md:leading-[72px] text-3xl font-bold'>
            Our <span className='text-primary-500'>Achievements</span>
          </h1>
          <p className='text-lg text-gray-600'>
            Various versions have evolved over the years, sometimes by accident.
          </p>

          <div className='grid  sm:grid-cols-2 py-16 gap-4'>
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} {...achievement} />
            ))}
          </div>
        </div>

        <img src={achievement} className='m-auto md:order-last  order-first' />
      </div>
    </div>
  );
};

export default Achievement;
