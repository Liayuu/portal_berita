import React from "react";

// Interface untuk mendefinisikan properti Pagination
interface PaginationProps {
  currentPage: number; // Halaman saat ini
  totalPages: number; // Total jumlah halaman
  onPageChange: (page: number) => void; // Fungsi untuk mengubah halaman
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage, // Props untuk halaman saat ini
  totalPages, // Props untuk total halaman
  onPageChange, // Props untuk fungsi perubahan halaman
}) => {
  // Fungsi untuk menangani navigasi ke halaman sebelumnya
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1); // Panggil fungsi dengan halaman sebelumnya
    }
  };

  // Fungsi untuk menangani navigasi ke halaman berikutnya
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // Panggil fungsi dengan halaman berikutnya
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Tombol untuk ke halaman sebelumnya */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1} // Nonaktif jika di halaman pertama
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Informasi halaman saat ini */}
      <span className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </span>

      {/* Tombol untuk ke halaman berikutnya */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages} // Nonaktif jika di halaman terakhir
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
