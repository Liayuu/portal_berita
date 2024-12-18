import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12 px-4 md:px-8">
      {/* Card Utama */}
      <div className="col-span-2 relative bg-gray-200 p-6 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Judul Utama</h2>
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded">
          Judul Artikel
        </div>
      </div>

      {/* Card Kedua */}
      <div className="space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex border rounded-lg overflow-hidden bg-white shadow-md p-4">
            {/* Gambar di kiri */}
            <img
              src="https://via.placeholder.com/120"
              alt="gambar"
              className="w-32 h-full object-cover"
            />
            {/* Deskripsi di kanan */}
            <div className="p-4 flex-1">
              <p className="text-sm text-gray-500">Penulis - 12 Jan 2024</p>
              <h3 className="font-bold text-lg mt-1">Judul Artikel {i + 1}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Ini adalah potongan artikel singkat yang berwarna abu-abu.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
