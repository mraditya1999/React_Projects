import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Container from './shared/Container';

const Simple = () => {
  const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];
  const [color, setColor] = useState('#f1f5f8');
  const { changeBackgroundColor } = useOutletContext();

  const generateColor = () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    changeBackgroundColor(randomColor);
  };

  useEffect(() => {
    setColor(color);
    changeBackgroundColor(color);
  }, []);

  return <Container color={color} generateColor={generateColor} />;
};
export default Simple;
