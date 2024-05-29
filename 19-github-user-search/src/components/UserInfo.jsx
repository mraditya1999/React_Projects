import { FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineLink } from 'react-icons/ai';
import { BsFillBuildingsFill } from 'react-icons/bs';
import Stats from './Stats';
import Info from './Info';

const UserInfo = ({ userData }) => {
  return (
    <div className='flex flex-col sm:flex-row md:gap-8 justify-between p-6 py-3'>
      <div className='md:w-[230px] flex justify-center items-center user-info'>
        <img
          src={userData.avatar_url}
          alt='User Avatar'
          className='w-56 rounded-full'
        />
      </div>

      <div className='w-full h-full gap-4'>
        <div className='user-details'>
          <h2 className='text-2xl'>{userData.name || 'Not available'}</h2>
          <div>
            <p className='text-blue-500'>
              @{userData.login || 'Not available'}
            </p>
            <p>{userData.bio || 'This profile has no bio'}</p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-1 mt-2 text-sm'>
          <Info icon={<FaLocationDot />} title={userData.location} />
          <Info
            icon={<AiOutlineLink />}
            title={new Date(userData.created_at).toISOString().split('T')[0]}
          />
          <Info icon={<FaTwitter />} title={userData.twitter_username} />
          <Info icon={<BsFillBuildingsFill />} title={userData.company} />
        </div>

        <div className='user-status mt-4 py-2 flex justify-center rounded-lg my-2 items-center gap-4 bg-[#141d2f]'>
          <Stats title='Repos' value={userData.public_repos} />
          <Stats title='Followers' value={userData.followers} />
          <Stats title='Following' value={userData.following} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
