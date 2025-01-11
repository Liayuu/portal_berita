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

    const getVideoThumbnails = (videoId: string): Array<string> => {
        const videoThumbnails: Array<string> = [];
        for (let i = 0; i < 5; i++) {
            const videoThumbnail = `https://img.youtube.com/vi/${videoId}/${i}.jpg`;
            videoThumbnails.push(videoThumbnail);
        }
        return videoThumbnails;
    }

    return { fetchHomepageNews, applicationDispatch, mainNews, fetchDetailNews, detailNews, getVideoThumbnails }
}