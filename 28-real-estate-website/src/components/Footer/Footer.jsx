import logo2 from '../../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>
        {/* Left Side */}
        <div className='flexColStart f-left'>
          <img src={logo2} alt='logo2' />
          <span className='secondaryText'>
            Our vision is to make all people <br /> the best place to live on
            them.
          </span>
        </div>

        {/* Right Side */}
        <div className='flexColStart f-right'>
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>5/D2 Mumbai, India </span>

          <div className='flexCenter f-menu'>
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
