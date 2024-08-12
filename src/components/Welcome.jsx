import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div className='welcome-section '>
      <p>Loop Wellness Club</p>
      <h1>
        Welcome, <span className='name'>{name}</span>
      </h1>
      <div className='flex items-center justify-center'>
        <img
          src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/electrolytesss.svg?v=1722001529'
          alt='Electrolytes'
        />
      </div>
    </div>
  );
};

export default Welcome;
