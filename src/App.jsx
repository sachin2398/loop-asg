import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header';
import Welcome from './components/Welcome';
import LoyaltyCard from './components/LoyalityCard';
import UpcomingOrder from './components/UpcomingOrder';
import ProductList from './components/ProductList';
import SavingPlanDetails from './components/SavingPlanDetails';
import OrderNotes from './components/OrderNotes';
import DiscountCode from './components/DiscountCode';
import SubscriptionPlan from './components/SubscriptionPlan';
import ShippingAddress from './components/ShippingAddress';
import PaymentDetails from './components/PaymentDetails';
import WellnessBonus from './components/WelllnessBounus';
import Sidebar from './components/Sidebar/Sidebar';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(null);

  const openSidebar = (content) => {
    setSidebarContent(content);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
 


    const products = [
      {
        title: 'Black Coffee by Loop',
        description: 'Subscription discount ($5.00)',
        price: '$20.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.png?v=1696319737'
      },
      {
        title: 'Inner Loop Supplement- Auto-ship Subscription',
        description: 'Description of product 2.',
        price: '$30.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
      },
      {
        title: 'Gut Health Powder by Alicia Kentzwood3',
        description: 'Subscription discount (15%).',
        price: '$40.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/image_58227018-eead-4b7b-af36-ba44b65d4a82.png?v=1691393869'
      },
      {
        title: 'Loop Yoga Membership',
        description: 'Subscription discount (35%).',
        price: '$45.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/32.png?v=1707334671'
      },
      {
        title: 'Inner Loop Supplement- Auto-ship Subscription',
        description: 'Description of product 2.',
        price: '$30.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
      },
      {
        title: 'Gut Health Powder by Alicia Kentzwood3',
        description: 'Subscription discount (15%).',
        price: '$40.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/image_58227018-eead-4b7b-af36-ba44b65d4a82.png?v=1691393869'
      },
      {
        title: 'Yoga Membership',
        description: 'Subscription discount (45%).',
        price: '$55.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/32.png?v=1707334671'
      },
      {
        title: 'Auto-ship Subscription',
        description: 'Description of product 2.',
        price: '$34.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
      },
      // Add more products as needed
    ];

    return (
      <>
        <Header />
        <Welcome name='Abel' />
        <div className='app'>
          <main className='main-content'>
            <LoyaltyCard points={750} coupons={2} />
            <OrderCard />
            <UpcomingOrder date='August 22, 2024' openSidebar={openSidebar} />
            <TryNew />
            <ProductList openSidebar={openSidebar} />
            <SavingPlanDetails openSidebar={openSidebar} />

            {/* Render Product Cards */}
            <main className='main-content flex flex-col items-center'>
              <section className='product-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 w-full'>
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  />
                ))}
                <OrderNotes />
                <DiscountCode />
                <SubscriptionPlan openSidebar={openSidebar} />
                <ShippingAddress openSidebar={openSidebar} />
                <PaymentDetails openSidebar={openSidebar} />
              </section>
            </main>

            
            <WellnessBonus />
            <div className='subscription-actions flex flex-col gap-2 items-center'>
              <button className='btn btn-outline max-w-xl  hover:bg-green-700 hover:text-white transition-colors duration-300'>
                Pause subscription
              </button>
              <button className='btn btn-outline max-w-xl   hover:bg-green-700 hover:text-white transition-colors duration-300'>Cancel subscription</button>
            </div>
          </main>
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} content={sidebarContent} />
        </div>
        <PromoBanner />
        <Footer />
      </>
    );
  }

  export default App;



const OrderCard = () => {
  return (
    <div className='mb-4 p-4 bg-transparent shadow-sm'>
      {/* Order Header */}
      <div className='flex justify-between items-center w-full mb-2'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div id='contract-shopify-id' className='text-lg font-semibold'>
            #10179281115
          </div>
          <div className='ml-2 text-green-500'>Active</div>
        </div>
      </div>

      {/* Order Price */}
      <div className='flex justify-between items-center mb-2'>
        <div className='text-lg'>
          <strong>$806.71</strong> + $0 shipping
        </div>
      </div>

      {/* Delivery Info */}
      <div className='flex items-center mb-2'>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-current h-4 w-4'
        >
          <path d='M14.5596 13.8154L14.3655 13.0335C13.7556 14.018 12.9137 14.8381 11.9135 15.4219C10.9132 16.0057 9.78511 16.3354 8.62791 16.3822C6.91171 16.3822 5.26581 15.7004 4.05227 14.4869C2.83874 13.2733 2.15698 11.6274 2.15698 9.91123H3.23547C3.23547 11.3414 3.8036 12.713 4.81488 13.7243C5.82616 14.7355 7.19775 15.3037 8.62791 15.3037C9.63021 15.2598 10.6055 14.9653 11.4646 14.4472C12.3238 13.929 13.0393 13.2038 13.5458 12.3378L12.532 12.6075L12.2732 11.529L14.4302 10.9897C14.5689 10.9555 14.7155 10.9777 14.8379 11.0516C14.9602 11.1254 15.0482 11.2447 15.0827 11.3834L15.6219 13.5403L14.5596 13.8154ZM2.69623 7.75426H2.82564L4.98262 7.21501L4.72378 6.13653L3.71 6.38997C4.21849 5.52698 4.93488 4.80498 5.79387 4.28977C6.65287 3.77456 7.62715 3.48253 8.62791 3.4403C10.0581 3.4403 11.4297 4.00844 12.4409 5.01971C13.4522 6.03099 14.0204 7.40258 14.0204 8.83275H15.0988C15.0988 7.11655 14.4171 5.47064 13.2035 4.25711C11.99 3.04357 10.3441 2.36182 8.62791 2.36182C7.46793 2.40598 6.33656 2.73446 5.33328 3.31837C4.33 3.90228 3.48555 4.72374 2.87418 5.71052L2.69623 4.92862L1.61774 5.18746L2.15698 7.34443C2.1865 7.46408 2.25612 7.57 2.35423 7.64457C2.45235 7.71914 2.57304 7.75785 2.69623 7.75426Z'></path>
        </svg>
        <div className='ml-2 text-sm'>Deliver every 1 month</div>
      </div>
    </div>
  );
};

function TryNew() {
  return (
    <div
      className='promo-content-container bg-cover bg-center rounded-lg shadow-lg p-8 relative max-w-6xl w-full'
      style={{
        backgroundImage: `url('https://cdn.shopify.com/s/files/1/0654/7079/1899/files/Try_something_new.svg?v=1721300580')`,
      }}
    >
      {/* Text Container */}
      <div className='promo-text-container text'>
        <h2 className='try-new-text flex gap-2 text-white text-3xl md:text-4xl font-bold'>
          <span>Try something</span>
          <span className='block'>new!</span>
        </h2>
        <p className='rehydrate-text text-white text-lg mt-2'>
          Rehydrate and replenish with our newly launched electrolytes
        </p>
      </div>

      {/* Button */}
      <div className='flex justify- mt-6'>
        <button className='promo-button bg-[#E5FFA5] text-black font-semibold py-2 px-6 rounded-full'>
          See all products
        </button>
      </div>
    </div>
  );
}
