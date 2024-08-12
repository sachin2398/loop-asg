import React from 'react';

const PaymentDetails = ({ openSidebar }) => {
  return (
    <div className='pay'>
      <h3>Payment details</h3>
      <p>Visa ending in 4242</p>
      <p>Expires 2/29</p>
      <p className='last-updated'>Last updated on: May 5, 2023</p>
      <div className='payment-actions flex'>
        <button
          onClick={() => openSidebar('update-payment')}
          className='btn btn-primary'
        >
          Update
        </button>
        <button
          onClick={() => openSidebar('change-payment')}
          className='btn  btn-secondary'
        >
          Change
        </button>
      </div>
      <p className='update-info'>Last update mail sent on: July 24, 2024</p>
    </div>
  );
};

export default PaymentDetails;
