import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const FirstAlternative = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const nextPerson = () => {
    setIndex(index + 1);
    if (index === people.length - 1) setIndex(0);
  };

  const prevPerson = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(people.length - 1);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomNumber = index + 1;
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>{<FaQuoteRight />}</span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={prevPerson}>
            {<FaChevronLeft />}
          </button>
          <button type='button' className='next-btn' onClick={nextPerson}>
            {<FaChevronRight />}
          </button>
        </div>

        <button
          type='button'
          className='btn btn-hipster'
          onClick={randomPerson}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};

export default FirstAlternative;
