import  { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        
        <img src="/logo.png.png" alt="Logo" className="h-8" />

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2 text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row items-center lg:space-x-6`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <a href="#shopSubscription" className="text-gray-700 hover:text-gray-900">
                Shop Subscription
              </a>
            </li>
            <li>
              <a href="#bundles" className="text-gray-700 hover:text-gray-900">
                Bundles
              </a>
            </li>
            <li>
              <a href="#manage" className="text-gray-700 hover:text-gray-900">
                Manage Subscription
              </a>
            </li>
            <li>
              <a href="#recharge" className="text-gray-700 hover:text-gray-900">
                Recharge Subscription
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
