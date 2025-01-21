import { format } from "date-fns";
import { id } from "date-fns/locale";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Props untuk komponen HeroRightComponentSection
interface HeroRightComponentSectionProps {
    newsId: string; // ID berita
    writer: string; // Penulis berita
    verified_at: string; // Tanggal dan waktu berita diverifikasi
    title: string; // Judul berita
    short_desc: string; // Deskripsi singkat berita
    videoThumbnails: Array<string>; // Array gambar thumbnail video
}

const HeroRightComponentSection: React.FC<HeroRightComponentSectionProps> = ({ newsId, writer, verified_at, title, short_desc, videoThumbnails }) => {
    const [isHovered, setIsHovered] = useState(false); // Status hover
    const [currentFrame, setCurrentFrame] = useState(0); // Indeks frame thumbnail saat ini

    // Fungsi untuk menangani hover (mouse masuk)
    const handleMouseEnter = () => {
        setIsHovered(true); 
        let frameIndex = 0; // Mulai dari frame pertama
        console.log(videoThumbnails); // Debugging untuk mengecek array thumbnail
        const interval = setInterval(() => { 
            setCurrentFrame(frameIndex); // Ubah frame saat ini
            frameIndex = (frameIndex + 1) % videoThumbnails.length; // Berpindah ke frame berikutnya
        }, 500); // Ganti frame setiap 500ms 
        return () => {
            frameIndex = 0; // Reset indeks frame ke awal
            return clearInterval(interval); // Bersihkan interval saat hover selesai
        };
    };

    // Fungsi untuk menangani mouse keluar
    const handleMouseLeave = () => { 
        setIsHovered(false); // Set hover ke false
        setCurrentFrame(0); // Kembali ke frame awal
    };

    return (
        <Link 
            key={newsId} 
            className="grid grid-cols-3 border rounded-lg overflow-hidden bg-white shadow-md mx-2 xl:mx-0 my-2 xl:my-0" 
            to={`/read/${newsId}`}> {/* Link ke halaman detail berita berdasarkan ID */}
            
            {/* Bagian gambar di kiri */}
            <div className="col-span-1 justify-center items-center aspect-auto p-2">
                <div className="object-cover w-full h-full">
                    {!isHovered ? (
                        // Thumbnail default sebelum hover
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={videoThumbnails[0]} alt={`thumbnail=${title}`} className="w-full h-auto"/>
                        </div>
                    ): (
                        // Thumbnail animasi saat hover
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={videoThumbnails[currentFrame]} alt={`thumbnail=${title}`} className="w-full h-auto"/>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Bagian deskripsi di kanan */}
            <div className="col-span-2 flex-1 flex flex-col justify-center items-center max-h-24 px-1 my-2">
                <div>
                    {/* Informasi penulis dan tanggal */}
                    <p className="text-xs lg:text-sm text-gray-500">
                        {writer} - {format(verified_at, "d MMM yyyy HH:mm", { locale: id })}
                    </p>
                    {/* Judul berita */}
                    <h3 className="font-bold text-sm lg:text-lg mt-1 text-ellipsis line-clamp-1">{title}</h3>
                    {/* Deskripsi singkat berita */}
                    <p className="text-gray-400 text-xs lg:text-sm mt-1 text-ellipsis line-clamp-2">
                        {short_desc}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default HeroRightComponentSection;
