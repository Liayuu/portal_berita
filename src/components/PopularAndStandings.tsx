import React from "react";

const PopularAndStandings: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 px-4 md:px-8">
      {/* Popular Videos */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Popular Videos</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
              <div>
                <h4 className="text-gray-800 font-semibold text-sm hover:text-red-500 cursor-pointer">
                  Spectacular Slam Dunks That Went Viral
                </h4>
                <p className="text-xs text-gray-500 mt-1">Adam Schefter - 5 mins ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NBA Standings */}
      <div>
        <h2 className="text-2xl font-bold mb-4">NBA Standings</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Team Rank</th>
              <th className="border-b py-2">W</th>
              <th className="border-b py-2">L</th>
            </tr>
          </thead>
          <tbody>
            {[
              { team: "Los Angeles Lakers", W: 8, L: 1 },
              { team: "Warriors", W: 8, L: 2 },
            ].map((item, i) => (
              <tr key={i}>
                <td className="py-2">{item.team}</td>
                <td>{item.W}</td>
                <td>{item.L}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularAndStandings;
