import React, { useEffect, useRef, useState } from "react";
import CarouselCardTrendy from "./CarouselCardTrendy";
import { NewsListDataInterface, SegmentListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import NewsController from "../services/controllers/NewsController";

interface ITrendyNews {
  segments: Array<SegmentListDataInterface<NewsListDataInterface>>
}

const TrendyNews: React.FC<ITrendyNews> = (data: ITrendyNews) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [itemsToShow, setItemsToShow] = useState(3);
  const controller = NewsController();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsToShow(5);
      // } else if (window.innerWidth <= 1080) {
      //   setItemsToShow(4);
      }else {
        setItemsToShow(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the correct number of items

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    data.segments.map((segment) => {
      return (
        <section className="my-12 px-4 md:px-8">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{segment.name}</h2>
            <a href={`/search?category=${segment.slug}&page=1`} className="text-lg font-bold underline text-red-700">See More</a>
          </div>
          <div className="flex">
            {/* Carousel with Cards */}
            <div className="lg:flex lg:flex-row justify-between items-center grid grid-cols-2" ref={scrollRef}>
              {Array.isArray(segment.news) && segment.news.slice(0, itemsToShow).map((article) => (
                <CarouselCardTrendy
                  key={article.id}
                  title={article.title}
                  author={article.writer.name}
                  date={format(article.verified_at, "d MMM yyyy HH:mm", { locale: id })}
                  desc={article.short_desc}
                  videoThumbnails={controller.getVideoThumbnails(article.content_url)}
                  link={`/read/${article.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )
    })
  );
};

export default TrendyNews;
