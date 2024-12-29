import { getHomepageData, useAppDispatch } from ".."

export default function NewsController() {
    const applicationDispatch = useAppDispatch();

    const fetchNews = async () => {
        applicationDispatch(
            getHomepageData({
                page: 1,
                category: "1",
                tag: "1",
                writer: "1"
            })
        )
    }

    return { fetchNews }
}