import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

import contact from '../../assets/contact.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* Left Side */}
        <div className='flexColStart c-left'>
          <span className='orangeText'>Contact Us</span>
          <span className='primaryText'>Easy to Contact Us</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </span>

          <div className='flexColStart contactModes'>
            {/* First row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>123 456 7890</span>
                  </div>
                </div>
                <div className='flexCenter button'>Call Now</div>
              </div>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>123 456 7890</span>
                  </div>
                </div>
                <div className='flexCenter button'>Chat Now</div>
              </div>
            </div>

            {/* Second row */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>123 456 7890</span>
                  </div>
                </div>
                <div className='flexCenter button'>Video Call Now</div>
              </div>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>123 456 7890</span>
                  </div>
                </div>
                <div className='flexCenter button'>Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='c-right'>
          <div className='image-container'>
            <img src={contact} alt='contact' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
