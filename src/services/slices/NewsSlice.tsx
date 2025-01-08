import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiProgrssInterface } from "../interfaces/MainInterface";
import { NewsDetailInterface, NewsListInterface, NewsListMainInterface } from "../interfaces/NewsInterface";
import { getHomepageData, getNewsDetail } from "../thunks/NewsThunk";

const newsInitialState: ApiProgrssInterface<NewsListMainInterface<NewsListInterface>> = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    data: {} as NewsListMainInterface<NewsListInterface>
}

const newsDetailInitialState: ApiProgrssInterface<NewsListMainInterface<NewsDetailInterface>> = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    data: {} as NewsListMainInterface<NewsDetailInterface>
}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomepageData.pending, (state) => {
            state.isLoading = true;
            state.isFulfilled = false;
        });
        builder.addCase(getHomepageData.fulfilled, (state, action: PayloadAction<NewsListMainInterface<NewsListInterface>>) => {
            state.isLoading = false;
            state.isFulfilled = true;
            state.data = action.payload;
        });
        builder.addCase(getHomepageData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

const newsDetailSlice = createSlice({
    name: 'details',
    initialState: newsDetailInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNewsDetail.pending, (state) => {
            state.isLoading = true;
            state.isFulfilled = false;
        });
        builder.addCase(getNewsDetail.fulfilled, (state, action: PayloadAction<NewsListMainInterface<NewsDetailInterface>>) => {
            state.isLoading = false;
            state.isFulfilled = true;
            state.data = action.payload;
        });
        builder.addCase(getNewsDetail.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export { newsSlice, newsDetailSlice };
// export the reducer from a separate file
export const newsReducer = newsSlice.reducer;
export const newsDetailReducer = newsDetailSlice.reducer;