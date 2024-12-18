import React from "react";

// Data untuk menu navbar
const menuItems = ["Cycling", "Football", "Basketball", "Tennis", "Running", "Badminton"];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-8">
      {/* Kontainer Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Shot News</h1>
          </div>

          {/* Menu Utama */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Responsif Mobile */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
