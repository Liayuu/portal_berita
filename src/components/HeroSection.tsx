import React from "react";
import { NewsListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import ReactPlayer from "react-player";
import HeroRightComponentSection from "./HeroRightComponentSection";
import NewsController from "../services/controllers/NewsController";
import { Link } from "react-router-dom";

interface IHeroSectionProps {
  mainNews: NewsListDataInterface,
  otherNews: Array<NewsListDataInterface>
}

const HeroSection: React.FC<IHeroSectionProps> = (data: IHeroSectionProps) => {
  const controller = NewsController();

  return (
    <div className="xl:grid gap-4 my-12 px-4 grid-cols-3 w-full h-full">
      {/* Card Utama */}
      <Link to={`/read/${data.mainNews.id}`} className="xl:col-span-2 overflow-hidden w-full h-full flex flex-col aspect-video">
        <div className="w-full h-full flex items-center justify-center bg-orange-600">
          {/* <div className="w-full h-full object-cover items-center justify-center"> */}
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            pip
            controls={false}
            muted
            config={{ file: { forceHLS: false } }}
            url={`https://www.youtube.com/watch?v=${data.mainNews.content_url}`}
          />
          {/* </div> */}
        </div>
        <div className="w-full h-min justify-center content-center">
          <div className="bg-slate-50 p-4 shadow-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-ellipsis overflow-hidden line-clamp-2">{data.mainNews.title}</h2>
            <p className="text-gray-700 mb-4 text-sm md:text-base text-ellipsis line-clamp-2 mt-2">
              {data.mainNews.short_desc}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">{format(data.mainNews.verified_at, "d MMM yyyy HH:mm", { locale: id })}</p>
          </div>
        </div>
      </Link>

      {/* Card Kedua */}
      <div className="xl:space-y-4 xl:flex-col xl:flex grid grid-cols-2 xl:space-x-0 py-4 xl:py-0 justify-start items-start">
        {data.otherNews.map((news) => {
          return (
            <HeroRightComponentSection
              key={news.id}
              newsId={news.id}
              writer={news.writer.name}
              verified_at={news.verified_at}
              title={news.title}
              short_desc={news.short_desc}
              videoThumbnails={controller.getVideoThumbnails(news.content_url)}
            />
          )
          // if (index < 3) {
          //   return (
          //     <div key={news.id} className="flex border rounded-lg overflow-hidden bg-white shadow-md min-h-min">
          //       {/* Gambar di kiri */}
          //       <div className="flex justify-center items-center w-24 lg:w-32 max-h-24 lg:max-h-24 p-2">
          //         <div className="object-cover w-full h-full">
          //           <VideoClip videoId={news.content_url} isAutoPlay height="100%" />
          //         </div>
          //         {/* <img
          //           src={news.content_url}
          //           alt="gambar"
          //           className="object-cover w-full h-full rounded-lg"
          //         /> */}
          //       </div>
          //       {/* Deskripsi di kanan */}
          //       <div className="py-2 flex-1 flex flex-col justify-center items-center">
          //         <div>
          //           <p className="text-xs lg:text-sm text-gray-500">{news.writer.name} - {format(data.mainNews.verified_at, "d MMM yyyy HH:mm", { locale: id })}</p>
          //           <h3 className="font-bold text-sm lg:text-lg mt-1 text-ellipsis line-clamp-2">{news.title}</h3>
          //           <p className="text-gray-400 text-xs lg:text-sm mt-1 text-ellipsis line-clamp-3">
          //             {news.short_desc}
          //           </p>
          //         </div>
          //       </div>
          //     </div>
          //   )
          // }
        })}
      </div>
    </div>
  );
};

export default HeroSection;
