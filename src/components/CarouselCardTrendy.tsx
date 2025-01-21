import React, { useState } from "react";
// import VideoClip from "./VideoClip"; // Dapat digunakan jika ada kebutuhan menampilkan video langsung
import { Link } from "react-router";

// Props untuk komponen ini
interface Props {
  title: string; // Judul konten
  author: string; // Penulis konten
  date: string; // Tanggal publikasi
  desc: string; // Deskripsi konten
  videoThumbnails: Array<string>; // Array thumbnail video untuk efek hover
  link?: string; // Link tujuan, default-nya adalah "#"
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, desc, videoThumbnails, link = "#" }) => {
  const [isHovered, setIsHovered] = useState(false); // Status apakah elemen sedang di-hover
  const [currentFrame, setCurrentFrame] = useState(0); // Indeks frame saat ini untuk thumbnail video

  // Fungsi untuk menangani event mouse masuk (hover)
  const handleMouseEnter = () => {
    setIsHovered(true);
    let frameIndex = 0; // Indeks frame dimulai dari 0
    console.log(videoThumbnails); // Debugging untuk melihat thumbnail video yang diterima
    const interval = setInterval(() => {
      setCurrentFrame(frameIndex); // Set frame saat ini
      frameIndex = (frameIndex + 1) % videoThumbnails.length; // Berpindah ke frame berikutnya
    }, 500); // Interval perpindahan frame setiap 500ms
    return () => {
      frameIndex = 0; // Reset frame indeks ke 0
      return clearInterval(interval); // Membersihkan interval saat hover berakhir
    };
  };

  // Fungsi untuk menangani event mouse keluar
  const handleMouseLeave = () => {
    setIsHovered(false); // Menghentikan status hover
    setCurrentFrame(0); // Reset ke frame awal
  };

  return (
    <Link to={link} className="h-full py-1 px-1 lg:py-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 h-full">
        {/* Bagian untuk menampilkan thumbnail video */}
        <div className="col-span-1 justify-center items-center aspect-auto p-2">
          <div className="object-fill aspect-auto">
            {!isHovered ? (
              // Thumbnail default sebelum hover
              <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={videoThumbnails[0]} alt={`thumbnail=${title}`} className="w-full h-auto" />
              </div>
            ) : (
              // Animasi thumbnail saat hover
              <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={videoThumbnails[currentFrame]} alt={`thumbnail=${title}`} className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>

        {/* Bagian deskripsi di bawah thumbnail */}
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {author} - {date}
          </p>
          <h3 className="font-semibold text-lg mt-1 text-ellipsis line-clamp-3">{title}</h3>
          <p className="text-gray-400 text-sm mt-2 text-ellipsis line-clamp-3">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCardTrendy;
