import React from "react";

const PopularVideos: React.FC = () => {
  return (
    <div className="my-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Popular Videos</h2>
      <div className="space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex border rounded-lg overflow-hidden bg-white shadow-md p-4"
          >
            {/* Video Embed YouTube */}
            <div className="w-32 h-32 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Ganti dengan ID video YouTube yang sesuai
                title="YouTube video"
                className="rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Deskripsi di kanan */}
            <div className="p-4 flex-1">
              <h4 className="text-gray-800 font-semibold text-sm hover:text-red-500 cursor-pointer">
                Spectacular Slam Dunks That Went Viral
              </h4>
              <p className="text-xs text-gray-500 mt-1">Adam Schefter - 5 mins ago</p>
              <p className="text-sm text-gray-600 mt-2">
                Ini adalah deskripsi singkat dari video, yang menjelaskan tentang slam dunk spektakuler yang viral di media sosial.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideos;
