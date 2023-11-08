import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from './shared/Container';

const Hex = () => {
  const [color, setColor] = useState('#11c7c7');
  const { changeBackgroundColor } = useOutletContext();

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const generateRandomNumber = () => Math.floor(Math.random() * hex.length);
  const generateColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) hexColor += hex[generateRandomNumber()];
    setColor(hexColor);
    changeBackgroundColor(hexColor);
  };

  useEffect(() => {
    setColor(color);
    changeBackgroundColor(color);
  }, []);

  return <Container color={color} generateColor={generateColor} />;
};
export default Hex;
