import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      {/* Gambar di atas */}
      <img
        src="https://via.placeholder.com/300"
        alt="carousel"
        className="w-full h-48 object-cover"
      />
      {/* Deskripsi di bawah gambar */}
      <div className="p-4">
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
