import React from "react";
import CarouselCardTrendy from "./CarouselCardTrendy";

const TrendyNews: React.FC = () => {
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
  ];

  return (
    <section className="my-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Trendy News</h2>
      {/* Carousel dengan Card lainnya */}
      <div className="flex space-x-4 overflow-x-auto">
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
    </section>
  );
};

export default TrendyNews;
