import React from 'react';

const Title = ({ title }) => {
  return (
    <div className='title'>
      <h2>{title || 'Default Title'}</h2>
      <div className='title-underline'></div>
    </div>
  );
};

export default Title;
