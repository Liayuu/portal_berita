import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendyNews from "./components/TrendyNews";
import LatestNews from "./components/LatestNews";
// import PopularVideos from "./components/PopularVideos"; 
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 ">
      <Navbar />
      <HeroSection />
      <TrendyNews />
      <LatestNews />
      {/* <PopularVideos /> */}
      <Footer />
    </div>
  );
};

export default App;
