import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsController from "../services/controllers/NewsController";
import CarouselCardTrendy from "../components/CarouselCardTrendy";
import { format } from "date-fns";
import { id } from "date-fns/locale";
// import Pagination from "../components/Pagination";

const SearchPage: React.FC = () => {
    const location = useLocation();
    // const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const author = queryParams.get("author");
    const search = queryParams.get("search");
    const tag = queryParams.get("tag");
    const page = queryParams.get("page");

    const controller = NewsController();

    useEffect(() => {
        controller.fetchSearchNews({
            slug: category,
            author: author === null ? author : Number(author),
            title: search,
            tag: tag,
            page: page === null ? 1 : Number(page)
        });
    }, [controller.applicationDispatch, category, author, search, tag, page, location.search]);

    const handleNextPage = (): number => {
        return controller.searchedNews.data.page + 1
    }

    const handleScroll = useCallback(() => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50 && !controller.searchedNews.isLoading) {
            if (controller.searchedNews.isFulfilled && controller.searchedNews.data.page <= controller.searchedNews.data.total) {
                controller.fetchSearchNews({
                    slug: category,
                    author: author === null ? author : Number(author),
                    title: search,
                    tag: tag,
                    page: Number(handleNextPage)
                })
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controller.applicationDispatch]);

    // const handlePageChange = () => {
    //     if (controller.searchedNews.data.next_url) {
    //         navigate(controller.searchedNews.data.next_url);
    //     }
    // }

    return (
        controller.searchedNews.isFulfilled ? (
            <div className="font-sans text-gray-800 h-full w-full flex flex-col items-start justify-start">
                <div className="p-16 w-full h-min min-h-min flex justify-center items-center">
                    <h3 className="text-3xl font-bold">
                        Hasil Pencarian
                    </h3>
                </div>
                {Array.isArray(controller.searchedNews.data.data.list) ? (
                    <div className="px-4 justify-between items-center grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 pb-16 gap-4">
                        {controller.searchedNews.data.data.list.map((news) => (
                            <CarouselCardTrendy
                                key={news.id}
                                title={news.title}
                                author={news.writer.name}
                                date={format(news.verified_at, "d MMM yyyy HH:mm", { locale: id })}
                                desc={news.short_desc}
                                videoThumbnails={controller.getVideoThumbnails(news.content_url)}
                                link={`/read/${news.id}`}
                            />
                        ))}
                    </div>
                ) : null}
                {/* <Pagination currentPage={controller.searchedNews.data.page} totalPages={controller.searchedNews.data.total} onPageChange={handlePageChange} /> */}
            </div>
        ) : (<div></div>)
    );
};

export default SearchPage;