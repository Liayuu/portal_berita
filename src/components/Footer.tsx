import React from "react";

// Komponen Footer untuk menampilkan bagian footer di halaman
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1B01] text-white py-6 px-4">
      {/* Wrapper untuk konten footer dengan lebar maksimum dan posisi di tengah */}
      <div className="max-w-screen-xl mx-auto text-center space-y-2">
        {/* Menampilkan informasi institusi */}
        <p className="text-white">Politeknik Negeri Bali • Kelompok 1 • PBL</p>
        {/* Menampilkan hak cipta */}
        <p className="text-white">Copyright © 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
