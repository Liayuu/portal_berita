import { getHomepageData, getNewsDetail, useAppDispatch, useAppSelector } from ".."

export default function NewsController() {
    const applicationDispatch = useAppDispatch();
    const mainNews = useAppSelector((state) => state.newsList);
    const detailNews = useAppSelector((state) => state.newsDetailList);

    const fetchHomepageNews = () => {
        applicationDispatch(
            getHomepageData()
        )
    }

    const fetchDetailNews = (newsId: string) => {
        applicationDispatch(
            getNewsDetail(newsId)
        )
    }

    return { fetchHomepageNews, applicationDispatch, mainNews, fetchDetailNews, detailNews }
}