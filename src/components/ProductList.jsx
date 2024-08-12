import  { useRef } from 'react';
import AddButton from '../SvgComp/AddButton';
const products = [
  {
    id: 1,
    name: 'Black Coffee by Loop',
    price: 29.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.png?v=1696319737',
  },

  {
    id: 1,
    name: 'Cocunut electrolyte',
    price: 20.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553',
  },
  {
    id: 1,
    name: 'Curacao electrolyte',
    price: 25.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/8.jpg?v=1721999780',
  },

  {
    id: 1,
    name: 'Guava electrolyte',
    price: 40.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.jpg?v=1721999630',
  },
      {
    id: 1,
    name: 'Lime eltrolyte',
    price: 59.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/7.jpg?v=1721999744',
  },

  {
    id: 1,
    name: 'Black Coffee',
    price: 29.99,
    image:
      'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.png?v=1696319737',
  },
];
const ProductList = ({ openSidebar }) => {
  const listRef = useRef(null);

  const handleScroll = () => {
    if (listRef.current) {
      const scrollLeft = listRef.current.scrollLeft;
      const scrollWidth = listRef.current.scrollWidth;
      const clientWidth = listRef.current.clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth) {
        openSidebar(null);
      }
    }
  };

  return (
    <div className='product-list overflow-x-auto no-scrollbar'>
      <div ref={listRef} className='flex' onScroll={handleScroll}>
        {products.map((product) => (
          <div key={product.id} className='product-item mr-4'>
            <img
              src={product.image}
              alt={product.name}
              className='product-image'
            />
            <div className='product-info'>
              <h3>{product.name}</h3>
              <div className='flex justify-between '>
                <p className='price'>
                  ${product.price.toFixed(2)}
                  {product.originalPrice && (
                    <span className='original-price'>
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </p>
                <button
                  onClick={() => openSidebar(`edit-product-${product.id}`)}
                  className='flex justify-center items-center bg-green-950 rounded-lg h-6 w-6'
                >
                  {/* Edit */}
                  <AddButton />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Test() {
  return (
    <div className='d-flex'>
      <div className='d-flex justify-content-center align-items-center  loop-image-product-sm me-3 flex-shrink-0'>
        <img
          src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553'
          className='img-fit'
        />
      </div>
      <div className='d-flex flex-column justify-content-between flex-grow-1 py-1'>
        <div className='loop-text-p1'>Cocunut electrolyte</div>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-baseline'>
            <div className='loop-text-p2 loop-text-muted my-1'>$1.99</div>
            <span className='text-decoration-line-through ms-2 loop-text-superscript'>
              $11.00
            </span>
          </div>
          <div
            className='d-flex justify-content-center align-items-center'
            style='background: rgb(0, 0, 0); border-radius: 50%; height: 25px; width: 25px;'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 9 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              // style='height: 12px; width: 12px;'
            >
              <path
                d='M0.5 5H4V8.5C4 8.63261 4.05268 8.75979 4.14645 8.85355C4.24021 8.94732 4.36739 9 4.5 9C4.63261 9 4.75979 8.94732 4.85355 8.85355C4.94732 8.75979 5 8.63261 5 8.5V5H8.5C8.63261 5 8.75979 4.94732 8.85355 4.85355C8.94732 4.75979 9 4.63261 9 4.5C9 4.36739 8.94732 4.24021 8.85355 4.14645C8.75979 4.05268 8.63261 4 8.5 4H5V0.5C5 0.367392 4.94732 0.240215 4.85355 0.146447C4.75979 0.0526785 4.63261 0 4.5 0C4.36739 0 4.24021 0.0526785 4.14645 0.146447C4.05268 0.240215 4 0.367392 4 0.5V4H0.5C0.367392 4 0.240215 4.05268 0.146447 4.14645C0.0526785 4.24021 0 4.36739 0 4.5C0 4.63261 0.0526785 4.75979 0.146447 4.85355C0.240215 4.94732 0.367392 5 0.5 5Z'
                fill='white'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
