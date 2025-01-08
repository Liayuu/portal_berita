export interface NewsListMainInterface<T> {
    version: string;
    status: string;
    code: number;
    message: string;
    page: number;
    totalResults: number;
    data: T;
}

export interface NewsListDataInterface {
    id: string;
    title: string;
    content_url: string;
    short_desc: string;
    updated_at: string;
    is_main_news: boolean;
    categories: CategoryNewsInterface;
    writer: NewsWriterInterface;
    tags: Array<NewsTagInterface>;
    verified_at: string;
    // curration: CurrationNewsInterface
}

export interface CurrationNewsInterface {
    id: number;
    currated_by: NewsWriterInterface;
    currated_at: string;
    currated_status: string;
    published_at: string;
}

export interface SegmentListDataInterface<NewsListDataInterface> {
    id: number;
    name: string;
    slug: string;
    news: Array<NewsListDataInterface>;
}

export interface CategoryNewsInterface {
    id: number;
    name: string;
}

export interface NewsWriterInterface {
    id: number;
    name: string;
}

export interface NewsTagInterface {
    id: number;
    name: string;
}

export interface NewsListInterface {
    latest_news: Array<NewsListDataInterface>;
    segment: Array<SegmentListDataInterface<NewsListDataInterface>>;
}

export interface NewsParamInterface {
    page: number;
    category?: string;
    tag?: string;
    writer?: string;
}

export interface NewsDetailInterface {
    news: NewsListDataInterface;
    related_news: Array<NewsListDataInterface>;
}