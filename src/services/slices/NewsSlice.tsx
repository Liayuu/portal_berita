import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiProgrssInterface } from "../interfaces/MainInterface";
import {
  NewsDetailInterface,
  NewsListInterface,
  NewsListMainInterface,
  NewsListDataInterface,
  NewsSearchListInterface,
} from "../interfaces/NewsInterface";
import {
  getHomepageData,
  getNewsDetail,
  getSearchNews,
} from "../thunks/NewsThunk";

// Inisialisasi state untuk berita utama
const newsInitialState: ApiProgrssInterface<
  NewsListMainInterface<NewsListInterface>
> = {
  isError: false, // Menandakan jika terjadi error
  isLoading: false, // Menandakan jika data sedang dimuat
  isFulfilled: false, // Menandakan jika data sudah berhasil diambil
  data: {} as NewsListMainInterface<NewsListInterface>, // Data berita utama
};

// Inisialisasi state untuk detail berita
const newsDetailInitialState: ApiProgrssInterface<
  NewsListMainInterface<NewsDetailInterface>
> = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  data: {} as NewsListMainInterface<NewsDetailInterface>,
};

// Inisialisasi state untuk pencarian berita
const newsSearchInitialState: ApiProgrssInterface<
  NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>
> = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  data: {} as NewsListMainInterface<
    NewsSearchListInterface<NewsListDataInterface>
  >,
};

// Slice untuk mengelola berita utama
const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {}, // Tidak ada reducer khusus untuk berita utama
  extraReducers: (builder) => {
    builder.addCase(getHomepageData.pending, (state) => {
      state.isLoading = true; // Menandakan loading saat request pending
      state.isFulfilled = false; // Menandakan belum ada data yang berhasil diambil
    });
    builder.addCase(
      getHomepageData.fulfilled,
      (
        state,
        action: PayloadAction<NewsListMainInterface<NewsListInterface>>
      ) => {
        state.isLoading = false; // Menandakan loading selesai
        state.isFulfilled = true; // Menandakan data berhasil diambil
        state.data = action.payload; // Menyimpan data yang diterima
      }
    );
    builder.addCase(getHomepageData.rejected, (state) => {
      state.isLoading = false; // Menandakan loading selesai
      state.isError = true; // Menandakan terjadi error saat request
    });
  },
});

// Slice untuk mengelola detail berita
const newsDetailSlice = createSlice({
  name: "details",
  initialState: newsDetailInitialState,
  reducers: {}, // Tidak ada reducer khusus untuk detail berita
  extraReducers: (builder) => {
    builder.addCase(getNewsDetail.pending, (state) => {
      state.isLoading = true;
      state.isFulfilled = false;
    });
    builder.addCase(
      getNewsDetail.fulfilled,
      (
        state,
        action: PayloadAction<NewsListMainInterface<NewsDetailInterface>>
      ) => {
        state.isLoading = false;
        state.isFulfilled = true;
        state.data = action.payload;
      }
    );
    builder.addCase(getNewsDetail.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// Slice untuk mengelola pencarian berita
const newsSearchSlice = createSlice({
  name: "news/search",
  initialState: newsSearchInitialState,
  reducers: {}, // Tidak ada reducer khusus untuk pencarian berita
  extraReducers: (builder) => {
    builder.addCase(getSearchNews.pending, (state) => {
      state.isLoading = true;
      state.isFulfilled = false;
    });
    builder.addCase(
      getSearchNews.fulfilled,
      (
        state,
        action: PayloadAction<
          NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>
        >
      ) => {
        state.isLoading = false;
        state.isFulfilled = true;
        // Jika halaman lebih dari 1, gabungkan data lama dan baru
        if (state.data.data !== null && state.data.page > 1) {
          state.data = {
            code: action.payload.code,
            message: action.payload.message,
            page: action.payload.page,
            status: action.payload.status,
            version: action.payload.version,
            prev_url: action.payload.prev_url,
            next_url: action.payload.next_url,
            total: action.payload.total,
            data: {
              list: [...state.data.data.list, ...action.payload.data.list], // Gabungkan data
            } as NewsSearchListInterface<NewsListDataInterface>,
          };
        } else {
          state.data = action.payload; // Jika halaman pertama, simpan data baru
        }
      }
    );
    builder.addCase(getSearchNews.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// Export slice dan reducer
export { newsSlice, newsDetailSlice, newsSearchSlice };
export const newsReducer = newsSlice.reducer;
export const newsDetailReducer = newsDetailSlice.reducer;
export const newsSearchReducer = newsSearchSlice.reducer;
