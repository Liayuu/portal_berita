import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"; 
import { newsDetailSlice, newsSearchSlice, newsSlice } from "./slices/NewsSlice"; 
import { setupListeners } from "@reduxjs/toolkit/query"; 
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// Membuat dan mengonfigurasi store Redux dengan reducer untuk news, detail news, dan pencarian news
export const store = configureStore({
    reducer: {
        newsList: newsSlice.reducer, // Menggunakan reducer dari newsSlice untuk menyimpan daftar berita
        newsDetailList: newsDetailSlice.reducer, // Menggunakan reducer dari newsDetailSlice untuk menyimpan detail berita
        newsSearch: newsSearchSlice.reducer // Menggunakan reducer dari newsSearchSlice untuk menyimpan hasil pencarian berita
    },
});

// Menyiapkan listener untuk Redux Toolkit Query
setupListeners(store.dispatch);

// Mengekspor fungsi-fungsi untuk thunks (aksi async) terkait berita
export * from "./thunks/NewsThunk";

// Menentukan tipe RootState berdasarkan state yang ada di store
export type RootState = ReturnType<typeof store.getState>;
// Menentukan tipe AppDispatch berdasarkan dispatch di store
export type AppDispatch = typeof store.dispatch;
// Custom hook untuk mendapatkan dispatch dengan tipe yang tepat
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Custom hook untuk menggunakan selector dengan tipe RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Menentukan tipe untuk AppThunk yang digunakan untuk aksi async
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
