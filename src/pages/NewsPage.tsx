import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsController from "../services/controllers/NewsController";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import CarouselCardTrendy from "../components/CarouselCardTrendy";
import ReactPlayer from "react-player";

const NewsPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const controller = NewsController();

  const { newsId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (newsId) {
      controller.fetchDetailNews(newsId);
    }
  }, [controller.applicationDispatch, newsId]);

  return controller.detailNews.isFulfilled ? (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full p-10 grid grid-cols-3 gap-3 min-h-max">
        {/* Card 1: News image */}
        <div className="w-full h-full bg-red-400 col-span-2 overflow-hidden">
          <ReactPlayer
            width="100%"
            height="100%"
            playing={false}
            pip
            controls={true}
            muted
            config={{ file: { forceHLS: true } }}
            url={`https://www.youtube.com/watch?v=${controller.detailNews.data.data.news.content_url}`}
          />
        </div>
        {/* Card 2: News details */}
        <div className="w-full h-full col-span-1 overflow-hidden rounded-lg shadow-lg bg-white p-5 min-h-full">
          <h3 className="text-3xl font-bold">
            {controller.detailNews.data.data.news.title}
          </h3>
          <div className="flex items-start mt-1">
            <p className="text-sm text-gray-800 font-bold">
              {controller.detailNews.data.data.news.writer.name}
            </p>
            <p className="text-sm text-gray-500 font-semibold mx-2"> - </p>
            <p className="text-sm text-gray-500 font-semibold">
              {format(
                controller.detailNews.data.data.news.verified_at,
                "d MMM yyyy HH:mm",
                { locale: id }
              )}
            </p>
          </div>
          <div
            className={`text-gray-900 text-md font-sans space-y-5 leading-6 mt-10 text-justify text-ellipsis ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            <p>{controller.detailNews.data.data.news.short_desc}</p>
          </div>
          <div className="flex justify-center mt-2">
            {!isExpanded ? (
              <button
                className="text-red-500 flex items-center space-x-1"
                onClick={() => setIsExpanded(true)}
              >
                <span>Lihat Selengkapnya</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="text-red-500 flex items-center space-x-1"
                onClick={() => setIsExpanded(false)}
              >
                <span>Tampilkan Lebih Sedikit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 15.75l-7.5-7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
          <hr className="border-t border-gray-400 my-5" />
          <div className="mb-5">
            <p className="text-gray-700 font-semibold">Tags:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {controller.detailNews.data.data.news.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 flex flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Related News</h2>
      </div>
      <div className="px-4 justify-between items-center grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 pb-8 gap-4">
        {Array.isArray(controller.detailNews.data.data.related) &&
          controller.detailNews.data.data.related.map((article) => (
            <CarouselCardTrendy
              key={article.id}
              title={article.title}
              author={article.writer.name}
              date={format(article.verified_at, "d MMM yyyy HH:mm", {
                locale: id,
              })}
              desc={article.short_desc}
              videoThumbnails={controller.getVideoThumbnails(
                article.content_url
              )}
              link={`/read/${article.id}`}
            />
          ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default NewsPage;
