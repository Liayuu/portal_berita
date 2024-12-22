import React from "react";
import CarouselCardLatest from "./CarouselCardLatest";

const LatestNews: React.FC = () => {
  const latestArticles = [
    {
      title: "Big Game Win Highlights",
      author: "Penulis 1",
      date: "20 Jan 2024",
      excerpt: "Tim berhasil meraih kemenangan penting setelah babak tambahan.",
    },
    {
      title: "Player's Record-Breaking Performance",
      author: "Penulis 2",
      date: "21 Jan 2024",
      excerpt: "Pemain mencetak rekor baru dengan performa yang memukau.",
    },
    {
      title: "Exciting Match Comes Down to the Wire",
      author: "Penulis 3",
      date: "22 Jan 2024",
      excerpt: "Pertandingan seru berakhir dengan selisih poin tipis.",
    },
    {
      title: "Upcoming Stars to Watch",
      author: "Penulis 4",
      date: "23 Jan 2024",
      excerpt: "Beberapa pemain muda mulai mencuri perhatian musim ini.",
    },
    {
      title: "Next Big Challenge for the Team",
      author: "Penulis 5",
      date: "25 Jan 2024",
      excerpt: "Tim mempersiapkan diri untuk tantangan besar berikutnya.",
    },
    {
      title: "Player's New Strategy in 2024",
      author: "Penulis 6",
      date: "27 Jan 2024",
      excerpt: "Strategi baru pemain akan memengaruhi musim ini.",
    },
  ];

  return (
    <section className="my-12 px-4 md:px-8">
      <div className="flex flex-row justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Latest News</h2>
      <p className="text-lg font-bold underline text-red-700">See More</p>
        </div>
      {/* Grid utama dengan gambar dan deskripsi */}
      <div className="grid grid-cols-2 gap-4 my-12 px-4 w-full h-3/4">
        <div className="w-full h-full">
          <img
            src="https://via.placeholder.com/600"
            alt="latest"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md md:w-2/3 mt-4 md:mt-0">
          <p className="text-sm text-gray-500">Penulis Utama - 19 Jan 2024</p>
          <h3 className="text-lg font-semibold mt-1">
            Star Player Leads Team to Victory
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Pertandingan yang penuh drama berakhir dengan kemenangan tim
            unggulan berkat performa luar biasa dari pemain bintang.
          </p>
        </div>
      </div>
      
      {/* Carousel dengan Card lainnya */}
      <h3 className="text-xl font-semibold mb-4">More News</h3>
      <div className="flex space-x-4 overflow-x-auto">
        {latestArticles.map((article, index) => (
          <CarouselCardLatest
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

export default LatestNews;
