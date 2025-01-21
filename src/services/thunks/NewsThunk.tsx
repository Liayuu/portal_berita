import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  NewsDetailInterface,
  NewsListDataInterface,
  NewsListInterface,
  NewsListMainInterface,
  NewsParamInterface,
  NewsSearchListInterface,
} from "../interfaces/NewsInterface";
import { baseApi } from "../http-commons";

// Mengambil data berita utama dari API
const getHomepageData = createAsyncThunk(
  "news", // Nama action
  async (): Promise<NewsListMainInterface<NewsListInterface>> => {
    // Melakukan request ke endpoint API untuk mendapatkan data berita utama
    return await baseApi
      .get<NewsListMainInterface<NewsListInterface>>("/api/news/home")
      .then((response) => {
        console.log("tessstt", response.data); // Menampilkan data yang diterima di console
        return response.data; // Mengembalikan data yang diterima
      })
      .catch((error) => {
        console.log("tessstt error", error); // Menampilkan error jika request gagal
        throw error; // Melemparkan error agar bisa ditangani di reducers
      });
  }
);

// Mengambil data berita berdasarkan pencarian atau filter dari API
const getSearchNews = createAsyncThunk(
  "news/search", // Nama action
  async (
    param?: NewsParamInterface // Parameter pencarian atau filter
  ): Promise<
    NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>
  > => {
    // Melakukan request ke endpoint API untuk mendapatkan data berdasarkan pencarian
    return await baseApi
      .get<
        NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>
      >("/api/news/home", {
        params: param, // Mengirimkan parameter pencarian atau filter
      })
      .then((response) => {
        console.log("tessstt", response.data); // Menampilkan data yang diterima di console
        return response.data; // Mengembalikan data yang diterima
      })
      .catch((error) => {
        console.log("tessstt error", error); // Menampilkan error jika request gagal
        throw error; // Melemparkan error agar bisa ditangani di reducers
      });
  }
);

// Mengambil detail berita berdasarkan ID dari API
const getNewsDetail = createAsyncThunk(
  "details", // Nama action
  async (id: string): Promise<NewsListMainInterface<NewsDetailInterface>> => {
    // Melakukan request ke endpoint API untuk mendapatkan detail berita
    return await baseApi
      .get<NewsListMainInterface<NewsDetailInterface>>("/api/news/home", {
        params: { id } as NewsParamInterface, // Mengirimkan ID berita sebagai parameter
      })
      .then((response) => {
        console.log("tessstt", response.data); // Menampilkan data yang diterima di console
        return response.data; // Mengembalikan data yang diterima
      })
      .catch((error) => {
        console.log("tessstt error", error); // Menampilkan error jika request gagal
        throw error; // Melemparkan error agar bisa ditangani di reducers
      });
  }
);

// Mengekspor fungsi-fungsi untuk digunakan di reducers
export { getHomepageData, getNewsDetail, getSearchNews };
