import { useEffect } from "react"
import NewsController from "../services/controllers/NewsController"
import CarouselCardTrendy from "../components/CarouselCardTrendy"
import { format } from "date-fns"
import { id } from "date-fns/locale"

const SearchPage: React.FC = () => {
    const queryParams = new URLSearchParams(window.location.search)
    const category = queryParams.get("category")
    const author = queryParams.get("author")
    const search = queryParams.get("search")
    const tag = queryParams.get("tag")
    const page = queryParams.get("page")

    const controller = NewsController()

    useEffect(() => {
        controller.fetchSearchNews({
            slug: category,
            author: Number(author),
            title: search,
            tag: tag,
            page: Number(page)
        });
    }, [controller.applicationDispatch]);

    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    if (controller.searchedNews.isFulfilled) {
        const news = controller.searchedNews.data.data
        return (
                <div className="font-sans text-gray-800 h-full w-full flex flex-col items-start justify-start">
                    <div className="p-16 w-full h-min min-h-min flex justify-center items-center">
                        <h3 className="text-3xl font-bold">
                            Hasil Pencarian
                        </h3>
                    </div>
                    <div className="px-4 justify-between items-center grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
                        {Array.isArray(news) && news.map((article) => (
                            <CarouselCardTrendy
                                key={article.id}
                                title={article.title}
                                author={article.writer.name}
                                date={format(article.verified_at, "d MMM yyyy HH:mm", { locale: id })}
                                desc={article.short_desc}
                                videoThumbnails={controller.getVideoThumbnails(article.content_url)}
                                link={`/read/${article.id}`}
                            />
                        ))}
                    </div>
                </div>
        )
    } else {
        return <div>Loading...</div>;
    }
}

export default SearchPage