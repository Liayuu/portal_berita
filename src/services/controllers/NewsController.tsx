import { getHomepageData, useAppDispatch } from ".."

export default function NewsController() {
    const applicationDispatch = useAppDispatch();

    const fetchHomepageNews = () => {
        applicationDispatch(
            getHomepageData()
        )
    }

    return { fetchHomepageNews }
}