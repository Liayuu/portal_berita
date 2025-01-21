import {
  getHomepageData,
  getNewsDetail,
  getSearchNews,
  useAppDispatch,
  useAppSelector,
} from "..";
import { NewsParamInterface } from "../interfaces/NewsInterface";

export default function NewsController() {
  const applicationDispatch = useAppDispatch();
  const mainNews = useAppSelector((state) => state.newsList);
  const detailNews = useAppSelector((state) => state.newsDetailList);
  const searchedNews = useAppSelector((state) => state.newsSearch);

  const fetchHomepageNews = () => {
    applicationDispatch(getHomepageData());
  };

  const fetchDetailNews = (newsId: string) => {
    applicationDispatch(getNewsDetail(newsId));
  };

  const fetchSearchNews = ({
    id,
    limit,
    limitPaginate,
    page,
    slug,
    title,
    author,
    tag,
  }: NewsParamInterface) => {
    applicationDispatch(
      getSearchNews({
        id,
        limit,
        limitPaginate,
        page: !page || page <= 1 ? 1 : page,
        slug,
        title,
        author,
        tag,
      })
    );
  };

  const getVideoThumbnails = (videoId: string): Array<string> => {
    const videoThumbnails: Array<string> = [];
    for (let i = 0; i < 5; i++) {
      const videoThumbnail = `https://img.youtube.com/vi/${videoId}/${i}.jpg`;
      videoThumbnails.push(videoThumbnail);
    }
    return videoThumbnails;
  };

  return {
    fetchHomepageNews,
    applicationDispatch,
    mainNews,
    fetchDetailNews,
    detailNews,
    getVideoThumbnails,
    searchedNews,
    fetchSearchNews,
  };
}
