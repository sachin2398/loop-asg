import React from 'react';

const LoyaltyCard = ({ points, coupons }) => {
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{ display: isDesktop ? 'block' : 'none' }}>
        <img
          src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/3rd_order_desktop.png?v=1710427192'
          alt='Desktop Image'
        />
      </div>
      <div style={{ display: isDesktop ? 'none' : 'block' }}>
        <img
          src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/3rd_order_mobile.png?v=1711024793'
          alt='Mobile Image'
        />
      </div>
    </div>
  );
};

export default LoyaltyCard;
