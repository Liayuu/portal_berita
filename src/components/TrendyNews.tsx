import React, { useEffect, useRef, useState } from "react";
import CarouselCardTrendy from "./CarouselCardTrendy";
import { NewsListDataInterface, SegmentListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import NewsController from "../services/controllers/NewsController";

// Interface untuk mendefinisikan properti komponen TrendyNews
interface ITrendyNews {
  segments: Array<SegmentListDataInterface<NewsListDataInterface>>; // Daftar segmen dengan data berita
}

const TrendyNews: React.FC<ITrendyNews> = (data: ITrendyNews) => {
  const scrollRef = useRef<HTMLDivElement>(null); // Referensi untuk container carousel
  const [itemsToShow, setItemsToShow] = useState(3); // Jumlah item yang ditampilkan pada layar
  const controller = NewsController(); // Instance controller untuk menangani data berita

  useEffect(() => {
    const handleResize = () => {
      // Menyesuaikan jumlah item yang ditampilkan berdasarkan lebar layar
      if (window.innerWidth >= 1280) {
        setItemsToShow(5); // 5 item untuk layar besar
      } else {
        setItemsToShow(4); // 4 item untuk layar kecil
      }
    };

    window.addEventListener('resize', handleResize); // Menambahkan event listener untuk resize
    handleResize(); // Memastikan konfigurasi sesuai ukuran layar saat komponen di-render

    return () => window.removeEventListener('resize', handleResize); // Membersihkan event listener
  }, []);

  return (
    // Melakukan iterasi pada setiap segmen
    data.segments.map((segment) => {
      return (
        <section className="my-12 px-4 md:px-8">
          {/* Judul segmen dan tautan 'See More' */}
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#0F1B07]">{segment.name}</h2>
            <a href={`/search?category=${segment.slug}&page=1`} className="text-lg font-bold underline text-[#0F1B07]">See More</a>
          </div>
          
          {/* Container carousel untuk menampilkan berita */}
          <div className="flex">
            <div className="lg:grid-cols-5 justify-between items-center grid grid-cols-2" ref={scrollRef}>
              {/* Menampilkan berita dalam jumlah yang sesuai */}
              {Array.isArray(segment.news) && segment.news.slice(0, itemsToShow).map((article) => (
                <CarouselCardTrendy
                  key={article.id} // Key unik untuk setiap berita
                  title={article.title} // Judul berita
                  author={article.writer.name} // Nama penulis berita
                  date={format(article.verified_at, "d MMM yyyy HH:mm", { locale: id })} // Tanggal berita terverifikasi
                  desc={article.short_desc} // Deskripsi singkat berita
                  videoThumbnails={controller.getVideoThumbnails(article.content_url)} // Thumbnail video berita
                  link={`/read/${article.id}`} // Tautan menuju halaman detail berita
                />
              ))}
            </div>
          </div>
        </section>
      );
    })
  );
};

export default TrendyNews;
