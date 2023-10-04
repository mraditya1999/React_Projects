import heroImg from '../assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Contentful is a modern headless Content Management System (CMS)
            designed for seamless content creation, management, and delivery
            across various digital platforms. Its API-first approach and
            cloud-based infrastructure enable flexibility, scalability, and
            real-time updates, making it an ideal choice for businesses aiming
            to deliver dynamic, personalized content experiences to their
            audiences.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='hero-img' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
