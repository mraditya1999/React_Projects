import React from 'react';

const Container = ({ color, generateColor }) => {
  return (
    <div className='container'>
      <h2>
        background color : <span className='color'>{color}</span>
      </h2>
      <button
        type='button'
        className='btn btn-hero'
        id='btn'
        onClick={generateColor}
      >
        click me
      </button>
    </div>
  );
};

export default Container;
