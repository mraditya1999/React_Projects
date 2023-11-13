import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='footer section'>
      <div className='footer__container container grid'>
        <FooterContainer title='Our information'>
          <ul className='footer__list'>
            <li>1234 - Peru</li>
            <li>La Libertad 43210</li>
            <li>123-456-789</li>
          </ul>
        </FooterContainer>

        <FooterContainer title='About Us'>
          <ul className='footer__links'>
            <FooterLink href='#' text='Support Center' />
            <FooterLink href='#' text='Customer Support' />
            <FooterLink href='#' text='About Us' />
            <FooterLink href='#' text='Copy Right' />
          </ul>
        </FooterContainer>

        <FooterContainer title='Product'>
          <ul className='footer__links'>
            <FooterLink href='#' text='Road bikes' />
            <FooterLink href='#' text='Mountain bikes' />
            <FooterLink href='#' text='Electric' />
            <FooterLink href='#' text='Accessories' />
          </ul>
        </FooterContainer>

        <FooterContainer title='Social'>
          <ul className='footer__social'>
            <FooterSocialLink
              href='https://www.facebook.com/'
              iconClass={<BiLogoFacebookCircle />}
            />
            <FooterSocialLink
              href='https://twitter.com/'
              iconClass={<BiLogoTwitter />}
            />
            <FooterSocialLink
              href='https://www.instagram.com/'
              iconClass={<BiLogoInstagram />}
            />
          </ul>
        </FooterContainer>
      </div>
      <span className='footer__copy'>© Aditya. All rights reserved</span>
    </footer>
  );
};

export default Footer;

const FooterContainer = ({ title, children }) => {
  return (
    <div className='footer__content'>
      <h3 className='footer__title'>{title}</h3>
      {children}
    </div>
  );
};

const FooterLink = ({ href, text }) => {
  return (
    <li>
      <a href={href} className='footer__link'>
        {text}
      </a>
    </li>
  );
};

const FooterSocialLink = ({ href, iconClass }) => {
  return (
    <a href={href} target='_blank' className='footer__social-link'>
      {iconClass}
    </a>
  );
};
