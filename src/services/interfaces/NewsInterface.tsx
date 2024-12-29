export interface NewsListMainInterface {
    version: string;
    status: string;
    code: number;
    message: string;
    page: number;
    totalResults: number;
    data: NewsListInterface;
}

export interface NewsListDataInterface {
    id: string;
    title: string;
    content_url: string;
    short_desc: string;
    published_at: string;
    updated_at: string;
    is_main_news: boolean;
    categories: Array<CategoryNewsInterface>;
    writer: NewsWriterInterface;
    tags: Array<NewsTagInterface>;
}

export interface CategoryNewsInterface {
    id: string;
    name: string;
}

export interface NewsWriterInterface {
    id: string;
    name: string;
}

export interface NewsTagInterface {
    id: string;
    name: string;
}

export interface NewsListInterface {
    list: Array<NewsListDataInterface>;
}

export interface NewsParamInterface {
    page: number;
    category?: string;
    tag?: string;
    writer?: string;
}