export interface ApiProgrssInterface<T> {
  isError: boolean; // Menunjukkan apakah terjadi kesalahan pada API (true jika ada error)
  isLoading: boolean; // Menunjukkan apakah API sedang dalam proses pemuatan (true jika masih loading)
  isFulfilled: boolean; // Menunjukkan apakah permintaan API sudah selesai dengan berhasil (true jika berhasil)
  data: T; // Menyimpan data yang diterima dari API, tipe generik T memungkinkan fleksibilitas tipe data
  errorMessage?: string | ApiErrorOutputInterface; // Pesan kesalahan (jika ada), bisa berupa string atau objek kesalahan
}

export interface ApiErrorOutputInterface {
  status: number; // Kode status HTTP (misal: 404, 500)
  timestamp: string; // Waktu ketika kesalahan terjadi
  message: string; // Pesan kesalahan yang lebih deskriptif
  debugMessage: string; // Pesan kesalahan untuk keperluan debugging, memberikan rincian lebih lanjut
}
