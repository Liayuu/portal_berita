// import { NavigateFunction, useNavigate } from "react-router";
import HeroSection from "../components/HeroSection";
import TrendyNews from "../components/TrendyNews";
import NewsController from "../services/controllers/NewsController";
import { useEffect } from "react";

export default function HomePage() {
  const controller = NewsController();
  // const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    controller.fetchHomepageNews();
  }, [controller.applicationDispatch]);
  
  return (
    controller.mainNews.isFulfilled ? 
    <div className="font-sans text-gray-800 ">
    <HeroSection
      mainNews={controller.mainNews.data.data.latest_news[0]}
      otherNews={controller.mainNews.data.data.latest_news.slice(1)}
    />
    <TrendyNews 
      news={controller.mainNews.data.data.segment}
    />
    {/* <LatestNews />
    <PopularVideos /> */}
  </div> : <div></div>
  );
}