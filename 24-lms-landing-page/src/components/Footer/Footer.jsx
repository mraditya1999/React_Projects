import { ButtonPrimary } from '../shared/Button';
import { navItems, footerItems, socialItems } from '../../data';
import { logo } from '../../assets';

const Footer = () => {
  return (
    <div className=' bg-white pt-24'>
      <div className='max-container grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
        <div className='col-span-2'>
          <img src={logo} className='h-[25px]' />
          <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
          <h3 className='py-2 text-[#6D737A]'>Call : +123 400 123</h3>
          <h3 className='py-2 text-[#6D737A]'>
            Praesent nulla massa, hendrerit <br></br> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <h3 className='py-2 text-[#363A3D]'>Email: example@mail.com</h3>

          {/* Social Items */}
          <ul className='flex gap-4 py-4'>
            {socialItems.map(({ id, icon }) => (
              <li
                key={id}
                className='hover:bg-primary-400 hover:text-white duration-300 p-4 bg-[#E9F8F3] text-primary-500 rounded-xl cursor-pointer'
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>

        {/* Nav Items */}
        <div>
          <h3 className='text-2xl font-bold'>Explore</h3>
          <ul className='py-6 text-grey-500'>
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className='py-2 hover:text-primary-500 duration-300 cursor-pointer'
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Items */}
        <div>
          <h3 className='text-2xl font-bold'>Category</h3>
          <ul className='py-6 text-grey-500'>
            {footerItems.map(({ id, text }) => (
              <li
                key={id}
                className='py-2 hover:text-primary-500 duration-300 cursor-pointer'
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className='max-[780px]:col-span-2'>
          <h3 className='text-2xl font-bold'>Subscribe</h3>
          <h3 className='py-2 text-grey-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem
            deserunt iure praesentium quo possimus ex. Amet tempore sunt esse!
          </h3>
          <form className='py-4'>
            <input
              className='bg-[#F2F3F4] border-grey-600 p-4 w-full rounded outline-none'
              placeholder='Email here'
            />
            <ButtonPrimary
              text=' Subscribe Now'
              className='max-[780px]:w-full mt-4 px-5'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
