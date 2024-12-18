import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const CarouselCardLatest: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="flex flex-col w-72 border rounded-lg overflow-hidden bg-white shadow-md p-4">
      {/* Gambar di kiri */}
      <img
        src="https://via.placeholder.com/120"
        alt="carousel"
        className="w-full h-32 object-cover"
      />
      {/* Deskripsi di kanan */}
      <div className="flex-1 p-4">
        <p className="text-sm text-gray-500">{author} - {date}</p>
        <h3 className="font-semibold text-lg mt-1">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{excerpt}</p>
      </div>
    </div>
  );
};

export default CarouselCardLatest;
