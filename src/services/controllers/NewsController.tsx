import { getHomepageData, useAppDispatch, useAppSelector } from ".."

export default function NewsController() {
    const applicationDispatch = useAppDispatch();
    const mainNews = useAppSelector((state) => state.newsList);

    const fetchHomepageNews = () => {
        applicationDispatch(
            getHomepageData()
        )
    }

    return { fetchHomepageNews, applicationDispatch, mainNews }
}