import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 my-12 px-4 md:px-8 lg:grid-cols-3">
      {/* Card Utama */}
      <div className="lg:col-span-2 overflow-hidden h-[500px] w-full relative">
        <div className="pl-24 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Berita utama"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 w-full h-full py-20 justify-center content-center">
            <div className="bg-slate-50 p-4 shadow-lg max-w-sm h-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-ellipsis overflow-hidden">People spend night on roofs and in trees after Ukraine dam breach</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base text-ellipsis line-clamp-3 mt-2">
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
