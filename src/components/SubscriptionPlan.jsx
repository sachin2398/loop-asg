import React from 'react';

const ShippingAddress = ({ openSidebar }) => {
  return (
    <div className='shipping-address'>
      <h3>Shipping address</h3>
      <p>Les</p>
      <p>1100 Van Ness Avenue</p>
      <p>San Francisco, California, 94109</p>
      <p>United States</p>
      <div className='address-actions flex'>
        <button
          onClick={() => openSidebar('edit-address')}
          className='btn btn-primary'
        >
          Edit
        </button>
        <button
          onClick={() => openSidebar('change-delivery')}
          className='btn btn-secondary'
        >
          Change delivery method
        </button>
      </div>
    </div>
  );
};

export default ShippingAddress;
