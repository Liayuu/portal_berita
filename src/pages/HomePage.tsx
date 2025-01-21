// import { NavigateFunction, useNavigate } from "react-router";
import HeroSection from "../components/HeroSection";
import TrendyNews from "../components/TrendyNews";
import NewsController from "../services/controllers/NewsController";
import { useEffect } from "react";

export default function HomePage() {
  const controller = NewsController(); // Inisialisasi controller untuk menangani data berita
  // const navigate: NavigateFunction = useNavigate(); // Fitur navigasi sedang tidak digunakan

  useEffect(() => {
    controller.fetchHomepageNews(); // Memanggil data berita untuk homepage saat komponen di-render
  }, [controller.applicationDispatch]); // Efek dijalankan ulang jika ada perubahan pada applicationDispatch
  
  return (
    controller.mainNews.isFulfilled ? // Mengecek apakah data berita utama berhasil dimuat
    <div className="font-sans text-gray-800 ">
      {/* Menampilkan komponen HeroSection dengan data berita utama */}
      <HeroSection
        mainNews={controller.mainNews.data.data.latest_news[0]} // Berita utama
        otherNews={controller.mainNews.data.data.latest_news.slice(1)} // Berita lainnya
      />
      {/* Menampilkan komponen TrendyNews dengan data segmen berita */}
      <TrendyNews 
        segments={controller.mainNews.data.data.segment}
      />
      {/*Komponen tambahan seperti LatestNews dan PopularVideos sedang tidak digunakan */}
    </div> : <div></div> // Render kosong jika data belum dimuat
  );
}
