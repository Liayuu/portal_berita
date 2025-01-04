import React, { useRef } from "react";
import CarouselCardTrendy from "./CarouselCardTrendy";
import { SegmentListDataInterface } from "../services/interfaces/NewsInterface";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface ITrendyNews {
  news: Array<SegmentListDataInterface>
}

const TrendyNews: React.FC<ITrendyNews> = (data: ITrendyNews) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    data.news.map((news) => (
      <section className="my-12 px-4 md:px-8">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{news.name}</h2>
        <p className="text-lg font-bold underline text-red-700">See More</p>
      </div>
      <div className="relative">
        {/* Carousel with Cards */}
        <div className="flex space-x-4 flex-row justify-between items-center" ref={scrollRef}>
          {news.news.map((article) => (
            <CarouselCardTrendy
              key={article.id}
              title={article.title}
              author={article.writer.name}
              date={format(article.verified_at,"d MMM yyyy HH:mm", {locale: id})}
              desc={article.short_desc}
              image={article.content_url}
            />
          ))}
        </div>
      </div>
    </section>
    ))
  );
};

export default TrendyNews;
