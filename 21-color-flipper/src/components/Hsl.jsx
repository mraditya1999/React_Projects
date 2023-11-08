import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from './shared/Container';

const Hsl = () => {
  const [color, setColor] = useState('Hsl(13, 77%, 51%)');
  const { changeBackgroundColor } = useOutletContext();

  const generateRandomNumber = (limit) => Math.floor(Math.random() * limit);
  const generateColor = () => {
    const hue = generateRandomNumber(360);
    const saturation = generateRandomNumber(100);
    const lightness = generateRandomNumber(100);
    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    setColor(hslColor);
    changeBackgroundColor(hslColor);
  };

  useEffect(() => {
    setColor(color);
    changeBackgroundColor(color);
  }, []);

  return <Container color={color} generateColor={generateColor} />;
};
export default Hsl;
