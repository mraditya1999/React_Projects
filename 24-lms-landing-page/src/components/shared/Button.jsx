import { PiLockLight } from 'react-icons/pi';

const ButtonPrimary = ({ text, className = '' }) => {
  return <button className={`primary-btn ${className}`}>{text}</button>;
};

const ButtonSecondary = ({ className = '' }) => {
  return (
    <button className={`secondary-btn ${className}`}>
      <PiLockLight />
      Login
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary };
