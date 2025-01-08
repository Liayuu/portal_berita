import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsController from "../services/controllers/NewsController";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import VideoClip from "../components/VideoClip";
import CarouselCardTrendy from "../components/CarouselCardTrendy";
import ReactPlayer from "react-player";

const NewsPage: React.FC = () => {
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const controller = NewsController();

  const { newsId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(`get in news detail ${newsId}`);
    if (newsId) {
      controller.fetchDetailNews(newsId);
    }
  }, [controller.applicationDispatch]);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setAuthor("");
  //   setContent("");
  // };

  return controller.detailNews.isFulfilled ? (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full p-10 grid grid-cols-3 gap-3 min-h-max">
        {/* Card 1: News image */}
        <div className="w-full h-full bg-red-400 col-span-2 overflow-hidden">
          {/* <img
          src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Berita utama"
          className="w-full aspect-video object-cover rounded-lg"
        /> */}
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
          {/* <VideoClip
            videoId={controller.detailNews.data.data.news.content_url}
            height='500px'
          /> */}
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
            className={`text-gray-900 text-md font-sans space-y-5 leading-6 mt-10 text-justify text-ellipsis ${isExpanded ? "" : "line-clamp-3"}`}
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
          {/* TODO: Comment dibuat jika API ada dan masih cukup waktu */}
          {/* <form onSubmit={handleSubmit} className="mb-5">
          <div className="mb-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="author"
            >
              Name
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Comment
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Comment
            </button>
          </div>
        </form> */}
        </div>
      </div>
      <div className="flex space-x-4 flex-row justify-between items-center">
        {Array.isArray(controller.detailNews.data.data.related_news) &&
          controller.detailNews.data.data.related_news.map((article) => (
            <CarouselCardTrendy
              key={article.id}
              title={article.title}
              author={article.writer.name}
              date={format(article.verified_at, "d MMM yyyy HH:mm", {
                locale: id,
              })}
              desc={article.short_desc}
              image={article.content_url}
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
