import { format } from "date-fns";
import { id } from "date-fns/locale";
import React, { useState } from "react";

interface HeroRightComponentSectionProps {
    newsId: string;
    writer: string;
    verified_at: string;
    title: string;
    short_desc: string;
    videoThumbnails: Array<string>;
}

const HeroRightComponentSection: React.FC<HeroRightComponentSectionProps> = ({ newsId, writer, verified_at, title, short_desc, videoThumbnails }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true); 
        let frameIndex = 0; 
        console.log(videoThumbnails);
        const interval = setInterval(() => { 
            setCurrentFrame(frameIndex); 
            frameIndex = (frameIndex + 1) % videoThumbnails.length; }, 500); // Ganti frame setiap 500ms 
        return () => {
            frameIndex = 0;
            return clearInterval(interval)
            
        };
    };

    const handleMouseLeave = () => { setIsHovered(false); setCurrentFrame(0); };

    return (
        <div key={newsId} className="grid grid-cols-3 border rounded-lg overflow-hidden bg-white shadow-md mx-2 xl:mx-0 my-2 xl:my-0">
            {/* Gambar di kiri */}
            <div className="col-span-1 justify-center items-center aspect-auto p-2">
                <div className="object-cover w-full h-full">
                    {!isHovered ? (
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={videoThumbnails[0]} alt={`thumbnail=${title}`} className="w-full h-auto"/>
                        </div>
                    ): (
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={videoThumbnails[currentFrame]} alt={`thumbnail=${title}`} className="w-full h-auto"/>
                        </div>
                    )}
                </div>
            </div>
            {/* Deskripsi di kanan */}
            <div className="col-span-2 flex-1 flex flex-col justify-center items-center max-h-24 px-1 my-2">
                <div>
                    <p className="text-xs lg:text-sm text-gray-500">{writer} - {format(verified_at, "d MMM yyyy HH:mm", { locale: id })}</p>
                    <h3 className="font-bold text-sm lg:text-lg mt-1 text-ellipsis line-clamp-1">{title}</h3>
                    <p className="text-gray-400 text-xs lg:text-sm mt-1 text-ellipsis line-clamp-2">
                        {short_desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroRightComponentSection;