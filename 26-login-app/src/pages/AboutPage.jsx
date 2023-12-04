import avatar from '../assets/my-avatar.png';

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-slate-50 py-8'>
      <div className='card w-[90vw] max-w-3xl mx-auto p-6 bg-white rounded-md shadow duration-300 hover:shadow-lg'>
        <h2 className='italic underline capitalize mb-6 text-4xl text-center'>
          About Me
        </h2>
        <img
          src={avatar}
          alt='avatar'
          className='rounded-full bg-slate-100 flex items-center justify-center my-5 mx-auto'
        />
        <div>
          <p className='mb-5'>
            👋 Hello, I'm{' '}
            <span className='font-semibold italic'>Aditya Yadav</span>, an
            aspiring frontend developer with a relentless passion for{' '}
            <span className='font-semibold italic'>frontend development</span>{' '}
            and technology. I hold a{' '}
            <span className='font-semibold italic'>
              Master's in Computer Applications (MCA)
            </span>{' '}
            and am on an exciting journey to harness my coding skills to create
            innovative web solutions.
          </p>

          <p className='mb-4'>
            <span className='font-semibold italic block'>
              💼 Professional Journey
            </span>{' '}
            My journey in frontend development has been marked by my commitment
            to honing my skills through projects. I have hands-on experience in
            <span className='font-semibold italic'>
              {' '}
              HTML, CSS, Vanilla JS, and React
            </span>{' '}
            . These projects showcase my dedication to frontend development and
            my ability to turn ideas into practical, user-friendly web
            applications.
          </p>

          <p className='mb-4'>
            <span className='font-semibold italic block'>🔨 Current Focus</span>{' '}
            Currently, I'm passionately diving deeper into the world of{' '}
            <span className='font-semibold italic'>
              React, Redux, TypeScript, and BAAS,
            </span>{' '}
            striving to master these powerful tools!. I believe in the power of
            React to create dynamic and engaging user interfaces, and I'm eager
            to take my skills to the next level.
          </p>

          <p>
            Excited to share my work with you! Check out my portfolio at{' '}
            <a
              href='http://adityayadav.live'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold italic hover:text-blue-500 duration-300 underline'
            >
              adityayadav.live
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
