import React, { useState } from 'react';

const DiscountCode = () => {
  const [discountCode, setDiscountCode] = useState('');

  const handleApply = () => {
    // Logic to apply discount code
    console.log('Applying discount code:', discountCode);
  };

  return (
    <div className='discount-code'>
      <h3>Discount code</h3>
      <div className='discount-input'>
        <input
          type='text'
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder='Enter discount code'
        />
        <button onClick={handleApply} className='btn btn-primary'>
          Apply
        </button>
      </div>
    </div>
  );
};

export default DiscountCode;
