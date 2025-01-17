import React from "react";
import { NewsListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import ReactPlayer from "react-player";
import HeroRightComponentSection from "./HeroRightComponentSection";
import NewsController from "../services/controllers/NewsController";
import { Link } from "react-router-dom";
import CarouselCardTrendy from "./CarouselCardTrendy";

interface IHeroSectionProps {
  mainNews: NewsListDataInterface,
  otherNews: Array<NewsListDataInterface>
}

const HeroSection: React.FC<IHeroSectionProps> = (data: IHeroSectionProps) => {
  const controller = NewsController();

  return (
    <div className="xl:grid gap-4 my-12 px-4 grid-cols-3 w-full h-full">
      {/* Card Utama */}
      <Link to={`/read/${data.mainNews.id}`} className="xl:col-span-2 overflow-hidden w-full h-full flex flex-col xl:aspect-video">
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
      <div className="xl:space-y-4 xl:flex-col xl:flex md:grid md:grid-cols-2 xl:space-x-0 py-4 xl:py-0 justify-start items-start hidden">
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
        })}
      </div>
      <div className="grid grid-cols-2 justify-between items-center md:hidden">
        {data.otherNews.map((news) => {
          return (
            <CarouselCardTrendy
              key={news.id}
              title={news.title}
              author={news.writer.name}
              date={format(news.verified_at, "d MMM yyyy HH:mm", { locale: id })}
              desc={news.short_desc}
              videoThumbnails={controller.getVideoThumbnails(news.content_url)}
              link={`/read/${news.id}`}
            />
          )
        })}
      </div>
    </div>
  );
};

export default HeroSection;
