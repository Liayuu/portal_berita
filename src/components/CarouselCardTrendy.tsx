import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="bg-red-700 rounded-lg shadow-md overflow-hidden p-4 max-w-72 min-w-48">
      {/* Gambar di atas */}
      <img
        src="https://via.placeholder.com/300"
        alt="carousel"
        className="object-cover aspect-square flex justify-center"
      />
      {/* Deskripsi di bawah gambar */}
      <div>
        <p className="text-sm text-gray-500">
          {author} - {date}
        </p>
        <h3 className="font-semibold text-lg mt-1">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{excerpt}</p>
      </div>
    </div>
  );
};

export default CarouselCardTrendy;
