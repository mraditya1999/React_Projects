import { useState, useRef, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PasswordInput from './PasswordInput';
import PasswordSettings from './PasswordSettings';
import PasswordGeneratorButton from './PasswordGeneratorButton';

const PasswordGenerator = () => {
  // State initialization
  const [generatedPassword, setGeneratedPassword] = useState('CLICK GENERATE');
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const notify = () => toast('copied to clipboard!');

  // Ref initialization
  const sliderRef = useRef(null);
  const passwordRef = useRef(null);

  // Event listener for slider
  useEffect(() => {
    if (sliderRef.current) {
      applyFill(sliderRef.current);
    }
    // generatePassword();
  }, [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    passwordLength,
  ]);

  // Event listener for slider change
  const handleSliderChange = (e) => {
    const value = e.target.value;
    setPasswordLength(value);
    applyFill(sliderRef.current);
  };

  // Apply fill to the slider
  const applyFill = (slider) => {
    const value = passwordLength;
    const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
    const bg = `linear-gradient(90deg, ${percentage}%, ${percentage + 0.1}%)`;
    slider.style.background = bg;
  };

  // Generate the password
  const generatePassword = () => {
    const length = passwordLength;
    const hasLower = includeLowercase;
    const hasUpper = includeUppercase;
    const hasNumber = includeNumbers;
    const hasSymbol = includeSymbols;
    const newPassword = generatePasswordString(
      length,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol
    );
    setGeneratedPassword(newPassword);
    setIsCopied(false);
  };

  // Generate the password string
  const generatePasswordString = (length, lower, upper, number, symbol) => {
    const types = {
      lower: getRandomLower,
      upper: getRandomUpper,
      number: getRandomNumber,
      symbol: getRandomSymbol,
    };

    const selectedTypes = Object.entries({ lower, upper, number, symbol })
      .filter(([_, value]) => value)
      .map(([type]) => type);

    if (selectedTypes.length === 0) return 'CLICK GENERATE';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomType =
        selectedTypes[generateRandomIndex(selectedTypes.length)];
      generatedPassword += types[randomType]();
    }

    return generatedPassword;
  };

  // Random character generation functions
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '~!@#$%^&*()_+{}":?><;.,';

  const generateRandomIndex = (length) => Math.floor(Math.random() * length);
  const getRandomLower = () => lowercase[generateRandomIndex(lowercase.length)];
  const getRandomUpper = () => uppercase[generateRandomIndex(uppercase.length)];
  const getRandomNumber = () => numbers[generateRandomIndex(numbers.length)];
  const getRandomSymbol = () => symbols[generateRandomIndex(symbols.length)];

  // Copy the generated password to the clipboard
  const copyToClipboard = () => {
    if (generatedPassword !== 'CLICK GENERATE') {
      navigator.clipboard.writeText(generatedPassword);
      // passwordRef.current.select();
      setIsCopied(true);
    }
  };

  // toggle Settings
  const toggleSetting = (setting) => {
    switch (setting) {
      case 'Uppercase':
        setIncludeUppercase(!includeUppercase);
        break;
      case 'Lowercase':
        setIncludeLowercase(!includeLowercase);
        break;
      case 'Numbers':
        setIncludeNumbers(!includeNumbers);
        break;
      case 'Symbols':
        setIncludeSymbols(!includeSymbols);
        break;
      default:
        break;
    }
  };

  return (
    <div className='container'>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='dark'
      />

      <h2 className='title'>Password Generator</h2>

      {/* Result */}
      <div id='result' className='result__viewbox'>
        <PasswordInput
          generatedPassword={generatedPassword}
          onGeneratePassword={generatePassword}
        />

        <button
          onClick={() => {
            copyToClipboard();
            notify();
          }}
        >
          <FaCopy />
        </button>
      </div>

      {/* Slider */}
      <div className='length range__slider' data-min='4' data-max='24'>
        <div className='length__title field-title'>
          length: {passwordLength}
        </div>
        <input
          id='slider'
          type='range'
          min='4'
          max='24'
          value={passwordLength}
          onChange={handleSliderChange}
          ref={sliderRef}
        />
      </div>

      {/* Settings */}
      <PasswordSettings
        includeUppercase={includeUppercase}
        includeLowercase={includeLowercase}
        includeNumbers={includeNumbers}
        includeSymbols={includeSymbols}
        onToggleSetting={toggleSetting}
      />

      {/* Generate Password Button */}
      <PasswordGeneratorButton onGeneratePassword={generatePassword} />
    </div>
  );
};

export default PasswordGenerator;
