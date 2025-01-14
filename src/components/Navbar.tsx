import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// Data untuk menu navbar
const menuItems = ["Cycling", "Football", "Basketball", "Tennis", "Running", "Badminton"];

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

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
          <div className="hidden md:flex space-x-4">
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

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-md text-sm text-black"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Menu"
            >
              {/* Mobile menu icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
    </nav>
  );
};

export default Navbar;
