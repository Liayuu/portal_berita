import HeroSection from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import PopularVideos from "../components/PopularVideos";
import TrendyNews from "../components/TrendyNews";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800 ">
      <HeroSection />
      <TrendyNews />
      <LatestNews />
      <PopularVideos />
    </div>
  );
}