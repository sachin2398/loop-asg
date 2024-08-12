import React from 'react';

const WellnessBonus = () => {
  const bonuses = [
    { icon: 'wellness_bonus_icon_01.svg', text: '40% off on your first order' },
    { icon: 'wellness_bonus_icon_04.svg', text: 'A gift after 2 orders' },
    { icon: 'wellness_bonus_icon_02.svg', text: '20% off on your next orders' },
    {
      icon: 'wellness_bonus_icon_05.svg',
      text: 'Sneak peek into our new product launches',
    },
    {
      icon: 'wellness_bonus_icon_03.svg',
      text: 'Free consultation with our nutrition expert',
    },
    {
      icon: 'wellness_bonus_icon_06.svg',
      text: 'Unlock VIP benefits on 8th order',
    },
  ];

  return (
    <div className='wellness-bonus-container flex flex-col bg-[#F3DF5D] p-6 rounded-[50px]'>
      <div className='wellness-header flex justify-between items-center'>
        <h2 className='text-6xl p-1 font-700 text-[#1A541D]'>Wellness Bonus</h2>
        <div className='wellness-logo desktop-logo'>
          <img
            src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_stamp_1.svg?v=1721371853'
            alt='LWC Logo'
          />
        </div>
      </div>
      <div className='wellness-content grid grid-cols-2 gap-4'>
        {bonuses.map((bonus, index) => (
          <div key={index} className='wellness-item flex items-center gap-4'>
            <img
              src={`https://cdn.shopify.com/s/files/1/0654/7079/1899/files/${bonus.icon}`}
              alt={`Icon ${index + 1}`}
            />
            <a href='#' className='wellness-text'>
              {bonus.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WellnessBonus;
