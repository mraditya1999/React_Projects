import home from '../../assets/img/home.png';

const SocialLink = ({ href, text }) => (
  <a href={href} target='_blank' className='home__social-link'>
    {text}
  </a>
);

const HomeSocial = () => (
  <div className='home__social'>
    <SocialLink href='https://www.facebook.com/' text='Facebook' />
    <SocialLink href='https://twitter.com/' text='Twitter' />
    <SocialLink href='https://www.instagram.com/' text='Instagram' />
  </div>
);

const HomeData = () => (
  <div className='home__data'>
    <h1 className='home__title'>
      NEW WATCH <br /> COLLECTIONS B720
    </h1>
    <p className='home__description'>
      Latest arrival of the new imported watches of the B720 series, with a
      modern and resistant design.
    </p>
    <span className='home__price'>$1245</span>
    <div className='home__btns'>
      <a href='#' className='button button--gray button--small'>
        Discover
      </a>
      <button className='button home__button'>ADD TO CART</button>
    </div>
  </div>
);

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container grid'>
        <div className='home__img-bg'>
          <img src={home} alt='' className='home__img' />
        </div>
        <HomeSocial />
        <HomeData />
      </div>
    </section>
  );
};

export default Home;
