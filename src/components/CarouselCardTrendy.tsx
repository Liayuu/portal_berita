import React from "react";

interface Props {
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex-shrink-0" style={{ width: '270px', height: '405px' }}>
      {/* Gambar di atas */}
      <img
        src="https://images.unsplash.com/photo-1634486531578-d46ae6a85c7a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="carousel"
        className="object-cover w-full h-[60%] flex justify-center rounded-lg"
      />
      {/* Deskripsi di bawah gambar */}
      <div className="mt-2">
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
