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
      <div className="grid grid-cols-2 gap-0 my-8 w-full h-3/4">
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="latest"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-6 bg-white w-full mt-4 md:mt-0 rounded-tr-lg rounded-br-lg flex flex-col justify-between items-start">
          <div className="w-full max-h-min">
            <div className="flex flex-row items-start justify-start">
              <p className="text-sm text-gray-800 font-bold">
                Gyokeres Mykhailovsky
              </p>
              <p className="text-sm text-gray-500 font-semibold mx-2"> - </p>
              <p className="text-sm text-gray-500 font-semibold">
                {" "}
                19 Jan 2024
              </p>
            </div>
            <h3 className="text-3xl font-bold mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-gray-500 text-md mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum odio non ullamcorper sagittis. Mauris ultrices turpis non
              felis efficitur gravida. Morbi ac sodales ante. Fusce dignissim
              blandit nunc, ut faucibus est aliquam eget. Nam malesuada mattis
              lacus et auctor. Etiam velit tortor, convallis in porttitor ut,
              molestie sit amet lectus. Vestibulum sed augue orci. Donec ac
              lorem a diam tristique vestibulum. Aliquam gravida imperdiet eros,
              a tempus tellus. Sed ornare est nisi, non auctor arcu finibus et.
              Etiam ac arcu eu arcu imperdiet facilisis quis vel dui. Praesent
              blandit metus vitae consequat fermentum.
            </p>
          </div>
          <div className="w-full max-h-min">
            <div className="flex flex-row items-start justify-start">
              <p className="text-sm text-red-800 font-semibold">KCNA Today</p>
              <p className="text-sm text-gray-500 font-normal mx-2"> - </p>
              <p className="text-sm text-gray-500 font-normal">
                {" "}
                16 Minutes Ago
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dengan Card lainnya */}
      <div className="grid xl:grid-cols-3 grid-cols-2 gap-3">
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
