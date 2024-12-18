import React from "react";

const NextMatch: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg text-center mb-10 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Next Match</h2>
      <p className="text-lg font-semibold">Toronto Raptors VS Philadelphia 76ers</p>
      <p className="text-sm text-gray-400 mt-2">Sunday, 12 January 2020 | 20:00 - 22:00 PM</p>
      <p className="text-orange-500 mt-1 font-semibold">
        Madison Square Garden, New York City
      </p>
    </div>
  );
};

export default NextMatch;
