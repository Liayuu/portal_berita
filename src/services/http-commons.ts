import axios from "axios";

// Membuat instance axios dengan konfigurasi dasar
const baseApi = axios.create({
    baseURL: "http://localhost:8000", // URL dasar untuk API
    headers: {
        "Content-type": "application/json" // Menetapkan header default sebagai JSON
    }
})

export { baseApi }; // Mengekspor instance axios yang telah dikonfigurasi agar bisa digunakan di tempat lain
