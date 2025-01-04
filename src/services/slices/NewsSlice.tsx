import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiProgrssInterface } from "../interfaces/MainInterface";
import { NewsListInterface, NewsListMainInterface } from "../interfaces/NewsInterface";
import { getHomepageData } from "../thunks/NewsThunk";

const newsInitialState: ApiProgrssInterface<NewsListMainInterface<NewsListInterface>> = {
    isError: false,
    isLoading: false,
    isFulfilled: false,
    data: {} as NewsListMainInterface<NewsListInterface>
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

export { newsSlice };
// export the reducer from a separate file
export default newsSlice.reducer