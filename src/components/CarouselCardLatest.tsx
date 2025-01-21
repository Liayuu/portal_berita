import React from "react";

// Interface Props digunakan untuk mendefinisikan tipe data properti yang diterima komponen
interface Props {
  title: string;  // Judul artikel atau konten
  author: string; // Nama penulis artikel
  date: string;   // Tanggal publikasi artikel
  excerpt: string; // Cuplikan singkat artikel
}

// Komponen CarouselCardLatest menerima properti (Props) dan menampilkan konten dalam kartu
const CarouselCardLatest: React.FC<Props> = ({ title, author, date, excerpt }) => {
  return (
    <div className="grid grid-cols-2 w-full rounded-lg overflow-hidden bg-white">
      {/* Bagian kiri untuk menampilkan gambar */}
      <img
        src="https://images.unsplash.com/photo-1602152043142-1d25a6d56a38?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="carousel" // Teks alternatif jika gambar tidak bisa dimuat
        className="w-full h-full object-cover flex rounded-lg" // Mengatur gaya gambar
      />
      {/* Bagian kanan untuk menampilkan deskripsi konten */}
      <div className="flex-1 p-4">
        {/* Menampilkan penulis dan tanggal */}
        <p className="text-sm text-gray-500">{author} - {date}</p>
        {/* Menampilkan judul artikel */}
        <h3 className="font-semibold text-lg mt-1">{title}</h3>
        {/* Menampilkan cuplikan artikel */}
        <p className="text-gray-400 text-sm mt-2">{excerpt}</p>
      </div>
    </div>
  );
};

export default CarouselCardLatest;
