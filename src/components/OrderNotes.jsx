import React from 'react';

const OrderNotes = ({ openSidebar }) => {
  return (
    <div className='order-notes'>
      <h3>Order notes</h3>
      <p>-</p>
      <button
        onClick={() => openSidebar('edit-notes')}
        className='btn btn-secondary'
      >
        Edit
      </button>
    </div>
  );
};

export default OrderNotes;
