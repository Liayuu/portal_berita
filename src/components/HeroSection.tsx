import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 my-12 px-4 md:px-8 lg:grid-cols-3">
      {/* Card Utama */}
      <div className="lg:col-span-2 relative bg-gray-200 rounded-lg overflow-hidden" style={{ height: '500px', width: '900px' }}>
        <div className="relative w-full h-full">
          <img
            src="https://via.placeholder.com/900x500"
            alt="Berita utama"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ aspectRatio: "1 / 1", width: "300px", height: "300px" }}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">People spend night on roofs and in trees after Ukraine dam breach</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base">
              Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukraine's President Volodymyr Zelensky has said.
            </p>
            <p className="text-gray-500 text-xs md:text-sm">Aug 03, 2023</p>
          </div>
        </div>
      </div>

      {/* Card Kedua */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="flex border rounded-lg overflow-hidden bg-white shadow-md h-36 lg:h-48">
            {/* Gambar di kiri */}
            <div className="flex justify-center items-center w-24 lg:w-32 max-h-24 lg:max-h-32 p-2 lg:p-4">
              <img
                src="https://via.placeholder.com/120"
                alt="gambar"
                className="object-cover mx-auto"
              />
            </div>
            {/* Deskripsi di kanan */}
            <div className="p-2 lg:p-4 flex-1 flex flex-col justify-center">
              <div>
                <p className="text-xs lg:text-sm text-gray-500">CNN News - {i % 2 === 0 ? '2 min read' : '5 min read'}</p>
                <h3 className="font-bold text-sm lg:text-lg mt-1">Judul Artikel {i + 1}</h3>
                <p className="text-gray-400 text-xs lg:text-sm mt-2">
                  Ini adalah potongan artikel singkat yang berwarna abu-abu.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
