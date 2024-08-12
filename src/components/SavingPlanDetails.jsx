import React from 'react';

const SavingPlanDetails = ({ openSidebar }) => {
  return (
    <div className='saving-plan-details flex justify-between'>
      <h2 className='text-2xl text-[#2C2C2C]'>Saving plan details</h2>
      <div className='plan-actions flex gap-3'>
        <button
          onClick={() => openSidebar('upcoming-orders')}
          className='px-6 py-3 border rounded-2xl hover:bg-green-700 hover:text-white transition-colors duration-300'
        >
          Upcoming orders
        </button>
        <button
          onClick={() => openSidebar('order-history')}
          className='px-6 py-3 border rounded-2xl hover:bg-green-700 hover:text-white transition-colors duration-300'
        >
          Order history
        </button>
      </div>
    </div>
  );
};

export default SavingPlanDetails;
