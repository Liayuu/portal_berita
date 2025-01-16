import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsDetailInterface, NewsListDataInterface, NewsListInterface, NewsListMainInterface, NewsParamInterface, NewsSearchListInterface } from "../interfaces/NewsInterface";
import { baseApi } from "../http-commons";

const getHomepageData = createAsyncThunk(
    "news",
    async (): Promise<NewsListMainInterface<NewsListInterface>> => {
        return await baseApi
            .get<NewsListMainInterface<NewsListInterface>>("/api/news/home")
            .then((response) => {
                console.log("tessstt", response.data)
                return response.data;
            })
            .catch((error) => {
                console.log("tessstt error", error)
                throw error;
            });
    }
)

const getSearchNews = createAsyncThunk(
    "news/search",
    async (param?: NewsParamInterface): Promise<NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>> => {
        return await baseApi
            .get<NewsListMainInterface<NewsSearchListInterface<NewsListDataInterface>>>("/api/news/home", {
                params: param
            })
            .then((response) => {
                console.log("tessstt", response.data)
                return response.data;
            })
            .catch((error) => {
                console.log("tessstt error", error)
                throw error;
            });
    }
)

const getNewsDetail = createAsyncThunk(
    "details",
    async (id: string): Promise<NewsListMainInterface<NewsDetailInterface>> => {
        return await baseApi
        .get<NewsListMainInterface<NewsDetailInterface>>("/api/news/home", {
            params: {id} as NewsParamInterface
        })
        .then((response) => {
            console.log("tessstt", response.data)
            return response.data;
        })
        .catch((error) => {
            console.log("tessstt error", error)
            throw error;
        });
    }
)

export { getHomepageData, getNewsDetail, getSearchNews };