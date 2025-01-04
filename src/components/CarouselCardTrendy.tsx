import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  desc: string;
  image: string;
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, desc, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex-shrink-0" style={{ width: '270px', height: '405px' }}>
      {/* Gambar di atas */}
      <img
        src={image}
        alt="carousel"
        className="object-cover w-full h-[60%] flex justify-center rounded-lg"
      />
      {/* Deskripsi di bawah gambar */}
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          {author} - {date}
        </p>
        <h3 className="font-semibold text-lg mt-1">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default CarouselCardTrendy;
