

const UpcomingOrder = ({ date, openSidebar }) => {
  return (
    <div className=' border rounded-3xl bg-[#f5f59e] p-6 gap-2 '>
      {/* <h2>
        Upcoming order: <strong>{date}</strong>
      </h2> */}
      <div className='text-lg text-[#1a541d]'>
        Upcoming order : <strong className='text-nowrap'>{date}</strong>
      </div>
      <div className='mt-4 flex justify-center gap-3 md:justify-start md:flex-row'>
        <button
          onClick={() => openSidebar('order-now')}
          className='btn btn-primary  hover:bg-green-700 hover:text-white transition-colors duration-300'
        >
          Order now
        </button>
        <button
          onClick={() => openSidebar('skip')}
          className='btn btn-secondary  hover:bg-green-700 hover:text-white transition-colors duration-300'
        >
          Skip
        </button>
        <button
          onClick={() => openSidebar('postpone')}
          className='btn btn-secondary  hover:bg-green-700 hover:text-white transition-colors duration-300'
        >
          Postpone
        </button>
      </div>
      <p className='text-sm text-gray-500 mt-4'>
        Last order was charged on July 25, 2024
      </p>
    </div>
  );
};

export default UpcomingOrder;


