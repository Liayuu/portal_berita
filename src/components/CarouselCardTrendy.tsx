import React, { useState } from "react";
// import VideoClip from "./VideoClip";
import { Link } from "react-router";

interface Props {
  title: string;
  author: string;
  date: string;
  desc: string;
  videoThumbnails: Array<string>;
  link?: string;
}

const CarouselCardTrendy: React.FC<Props> = ({ title, author, date, desc, videoThumbnails, link = "#" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    let frameIndex = 0;
    console.log(videoThumbnails);
    const interval = setInterval(() => {
      setCurrentFrame(frameIndex);
      frameIndex = (frameIndex + 1) % videoThumbnails.length;
    }, 500); // Ganti frame setiap 500ms 
    return () => {
      frameIndex = 0;
      return clearInterval(interval)

    };
  };

  const handleMouseLeave = () => { setIsHovered(false); setCurrentFrame(0); };

  return (
    <Link to={link} className="h-full py-1 px-1 lg:py-0">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 h-full">
        <div className="col-span-1 justify-center items-center aspect-auto p-2">
          <div className="object-fill aspect-auto">
            {!isHovered ? (
              <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={videoThumbnails[0]} alt={`thumbnail=${title}`} className="w-full h-auto" />
              </div>
            ) : (
              <div className="cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={videoThumbnails[currentFrame]} alt={`thumbnail=${title}`} className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>
        {/* <VideoClip videoId={image} isAutoPlay height="100%"/> */}
        {/* Gambar di atas */}
        {/* <img
        src={image}
        alt="carousel"
        className="object-cover w-full h-[60%] flex justify-center rounded-lg"
      /> */}
        {/* Deskripsi di bawah gambar */}
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
