import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { newsDetailSlice, newsSearchSlice, newsSlice } from "./slices/NewsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        newsList: newsSlice.reducer,
        newsDetailList: newsDetailSlice.reducer,
        newsSearch: newsSearchSlice.reducer
    },
});

setupListeners(store.dispatch);

export * from "./thunks/NewsThunk";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;