import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

interface MenuItemProps {
  title: string;
  slug: string;
}

const menuItems: Array<MenuItemProps> = [
  { title: "Berita", slug: "berita" },
  { title: "Edukasi", slug: "edukasi" },
  { title: "Pendidikan", slug: "pendidikan" },
  { title: "Game", slug: "game" },
  { title: "Tips and tricks", slug: "tips-and-tricks" },
];

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?search=${searchQuery}`);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={`/`}>
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Shot News</h1>
            </div>
          </Link>

          <div className="hidden lg:flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`/search?category=${item.slug}&page=1`}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="items-center space-x-4 hidden lg:flex">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-md text-sm text-black"
                placeholder="Search..."
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              ) : (
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
                >
                  <FaSearch />
                </button>
              )}
            </form>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`/search?category=${item.slug}&page=1`}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              >
                {item.title}
              </a>
            ))}
            <form onSubmit={handleSearch} className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-md text-sm text-black w-full"
                placeholder="Search..."
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              ) : (
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white"
                >
                  <FaSearch />
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
