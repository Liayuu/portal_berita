import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsListMainInterface, NewsParamInterface } from "../interfaces/NewsInterface";
import { baseApi } from "../http-commons";

const getHomepageData = createAsyncThunk(
    "news",
    async (param?: NewsParamInterface): Promise<NewsListMainInterface> => {
        return await baseApi
            .get<NewsListMainInterface>("/news", {
                params: param
            })
            .then((response) => response.data)
            .catch((error) => {
                throw error;
            });
    }
)

export { getHomepageData };