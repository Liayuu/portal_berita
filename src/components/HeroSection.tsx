import React from "react";
import { NewsListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface IHeroSectionProps {
  mainNews: NewsListDataInterface,
  otherNews: Array<NewsListDataInterface>
}

const HeroSection: React.FC<IHeroSectionProps> = (data: IHeroSectionProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 my-12 px-4 md:px-8 lg:grid-cols-3 w-full">
      {/* Card Utama */}
      <div className="lg:col-span-2 overflow-hidden w-full relative">
        <div className="pl-24 w-full h-full">
          <img
            src={data.mainNews.content_url}
            // src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Berita utama"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 w-full h-full py-20 justify-center content-center">
            <div className="bg-slate-50 p-4 shadow-lg max-w-sm h-full">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-ellipsis overflow-hidden">{data.mainNews.title}</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base text-ellipsis line-clamp-3 mt-2">
                {data.mainNews.short_desc}
              </p>
              <p className="text-gray-500 text-xs md:text-sm">{format(data.mainNews.curration.published_at,"d MMM yyyy HH:mm", {locale: id})}</p>
            </div>
          </div>
      </div>

      {/* Card Kedua */}
      <div className="space-y-4">
        {data.otherNews.map((news) => (
          <div key={news.id} className="flex border rounded-lg overflow-hidden bg-white shadow-md min-h-min">
            {/* Gambar di kiri */}
            <div className="flex justify-center items-center w-24 lg:w-32 max-h-24 lg:max-h-32 p-2">
              <img
                src={news.content_url}
                alt="gambar"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            {/* Deskripsi di kanan */}
            <div className="py-2 lg:py-4 flex-1 flex flex-col justify-center items-center">
              <div>
                <p className="text-xs lg:text-sm text-gray-500">{news.writer.name} - {format(data.mainNews.curration.published_at,"d MMM yyyy HH:mm", {locale: id})}</p>
                <h3 className="font-bold text-sm lg:text-lg mt-1">{news.title}</h3>
                <p className="text-gray-400 text-xs lg:text-sm mt-2">
                  {news.short_desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
