import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from './shared/Container';

const Rgb = () => {
  const [color, setColor] = useState('Rgb(195, 231, 113)');
  const { changeBackgroundColor } = useOutletContext();

  const generateRandomNumber = () => Math.floor(Math.random() * 255);
  const generateColor = () => {
    let red = generateRandomNumber();
    let green = generateRandomNumber();
    let blue = generateRandomNumber();

    setColor(`rgb(${red}, ${green}, ${blue})`);
    changeBackgroundColor(`rgb(${red}, ${green}, ${blue})`);
  };

  useEffect(() => {
    setColor(color);
    changeBackgroundColor(color);
  }, []);

  return <Container color={color} generateColor={generateColor} />;
};
export default Rgb;
