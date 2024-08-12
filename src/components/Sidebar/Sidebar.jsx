import React from 'react';

const Sidebar = ({ isOpen, onClose, content }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} flex justify-between`}>
      <div className='sidebar-content'>
      
        {content}
      </div>
      <button className='' onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Sidebar;
