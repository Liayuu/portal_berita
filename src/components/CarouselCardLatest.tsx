import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const CarouselCardLatest: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="grid grid-cols-2 w-full rounded-lg overflow-hidden bg-white">
      {/* Gambar di kiri */}
      <img
        src="https://images.unsplash.com/photo-1602152043142-1d25a6d56a38?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="carousel"
        className="w-full h-full object-cover flex rounded-lg"
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
