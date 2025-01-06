import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsListInterface, NewsListMainInterface, NewsParamInterface } from "../interfaces/NewsInterface";
import { baseApi } from "../http-commons";

const getHomepageData = createAsyncThunk(
    "news",
    async (param?: NewsParamInterface): Promise<NewsListMainInterface<NewsListInterface>> => {
        return await baseApi
            .get<NewsListMainInterface<NewsListInterface>>("/api/news/home", {
                params: param
            })
            .then((response) => {
                // console.log("tessstt", response.data)
                return response.data;
            })
            .catch((error) => {
                // console.log("tessstt error", error)
                throw error;
            });
    }
)

export { getHomepageData };