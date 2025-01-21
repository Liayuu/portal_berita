import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";

// Interface untuk mendefinisikan struktur item menu
interface MenuItemProps {
  title: string; // Nama menu yang akan ditampilkan
  slug: string; // Slug URL untuk setiap kategori
}

// Daftar menu yang akan ditampilkan di navbar
const menuItems: Array<MenuItemProps> = [
  { title: "Berita", slug: "berita" },
  { title: "Edukasi", slug: "edukasi" },
  { title: "Pendidikan", slug: "pendidikan" },
  { title: "Game", slug: "game" },
  { title: "Tips and tricks", slug: "tips-and-tricks" },
];

const Navbar: React.FC = () => {
  // State untuk query pencarian
  const [searchQuery, setSearchQuery] = useState("");
  // State untuk membuka/menutup menu di perangkat kecil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Hook untuk navigasi
  const navigate = useNavigate();

  // Fungsi untuk menangani pencarian
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?search=${searchQuery}`); // Redirect ke halaman hasil pencarian
    }
  };

  // Fungsi untuk menghapus query pencarian
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Fungsi untuk membuka/menutup menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0F1B01] text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={`/`}>
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Shot News</h1>
            </div>
          </Link>

          {/* Menu untuk perangkat besar */}
          <div className="hidden lg:flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`/search?category=${item.slug}&page=1`}
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#E6FFD4] hover:text-[#011A27]"
              >
                {item.title} {/* Nama menu */}
              </a>
            ))}
          </div>

          {/* Input pencarian untuk perangkat besar */}
          <div className="items-center space-x-4 hidden lg:flex">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-md text-sm text-black"
                placeholder="Search..."
              />
              {/* Tombol hapus atau cari */}
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

          {/* Tombol menu untuk perangkat kecil */}
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

      {/* Menu untuk perangkat kecil */}
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
            {/* Input pencarian untuk perangkat kecil */}
            <form onSubmit={handleSearch} className="relative mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-md text-sm text-black w-full"
                placeholder="Search..."
              />
              {/* Tombol hapus atau cari */}
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
