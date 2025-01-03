import React, { useRef } from "react";
import CarouselCardTrendy from "./CarouselCardTrendy";

const TrendyNews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendyArticles = [
    {
      title: "Exciting Sports News",
      author: "Penulis 1",
      date: "20 Jan 2024",
      excerpt: "Jadwal pertandingan yang akan datang dan penting untuk diketahui.",
    },
    {
      title: "Upcoming Matches",
      author: "Penulis 2",
      date: "21 Jan 2024",
      excerpt: "Jadwal pertandingan yang akan datang dan penting untuk diketahui.",
    },
    {
      title: "Exciting Sports News",
      author: "Penulis 1",
      date: "20 Jan 2024",
      excerpt: "Jadwal pertandingan yang akan datang dan penting untuk diketahui.",
    },
    {
      title: "Exciting Sports News",
      author: "Penulis 1",
      date: "20 Jan 2024",
      excerpt: "Berita olahraga terbaru yang menarik perhatian banyak orang.",
    },
    {
      title: "Exciting Sports News",
      author: "Penulis 1",
      date: "20 Jan 2024",
      excerpt: "Berita olahraga terbaru yang menarik perhatian banyak orang.",
    },
    
    // Add more articles if needed
  ];

  return (
    <section className="my-12 px-4 md:px-8">
      <div className="flex flex-row justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Trendy News</h2>
      <p className="text-lg font-bold underline text-red-700">See More</p>
        </div>
      <div className="relative">
        {/* Carousel with Cards */}
        <div className="flex space-x-4 flex-row justify-between items-center" ref={scrollRef}>
          {trendyArticles.map((article, index) => (
            <CarouselCardTrendy
              key={index}
              title={article.title}
              author={article.author}
              date={article.date}
              excerpt={article.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendyNews;
