import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiProgrssInterface } from "../interfaces/MainInterface";
import { NewsDetailInterface, NewsListInterface, NewsListMainInterface, NewsListDataInterface, NewsSearchListInterface } from "../interfaces/NewsInterface";
import { getHomepageData, getNewsDetail, getSearchNews } from "../thunks/NewsThunk";

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

const newsSearchInitialState: ApiProgrssInterface<NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>> = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    data: {} as NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>
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

const newsSearchSlice = createSlice({
    name: 'news/search',
    initialState: newsSearchInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchNews.pending, (state) => {
            state.isLoading = true;
            state.isFulfilled = false;
        });
        builder.addCase(getSearchNews.fulfilled, (state, action: PayloadAction<NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>>) => {
            state.isLoading = false;
            state.isFulfilled = true;
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
                        list: [...state.data.data.list, ...action.payload.data.list],
                    } as NewsSearchListInterface<NewsListDataInterface>
                }
            } else {
                state.data = action.payload;
            }
        });
        builder.addCase(getSearchNews.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})

export { newsSlice, newsDetailSlice, newsSearchSlice };
// export the reducer from a separate file
export const newsReducer = newsSlice.reducer;
export const newsDetailReducer = newsDetailSlice.reducer;
export const newsSearchReducer = newsSearchSlice.reducer;