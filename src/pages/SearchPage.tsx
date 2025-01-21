import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NewsController from "../services/controllers/NewsController";
import CarouselCardTrendy from "../components/CarouselCardTrendy";
import { format } from "date-fns";
import { id } from "date-fns/locale";
// import Pagination dari komponen Pagination

const SearchPage: React.FC = () => {
    const location = useLocation(); // Mendapatkan lokasi URL saat ini
    const queryParams = new URLSearchParams(location.search); // Mendapatkan parameter query dari URL
    const category = queryParams.get("category"); // Kategori berita
    const author = queryParams.get("author"); // Penulis berita
    const search = queryParams.get("search"); // Pencarian judul berita
    const tag = queryParams.get("tag"); // Tag pencarian
    const page = queryParams.get("page"); // Halaman untuk navigasi

    const controller = NewsController(); // Menggunakan NewsController untuk mengelola data berita

    useEffect(() => {
        // Mengambil data pencarian berdasarkan parameter query
        controller.fetchSearchNews({
            slug: category,
            author: author === null ? author : Number(author), // Jika author ada, konversi menjadi nomor
            title: search, // Judul pencarian
            tag: tag, // Tag pencarian
            page: page === null ? 1 : Number(page) // Menentukan halaman yang ditampilkan
        });
    }, [controller.applicationDispatch, category, author, search, tag, page, location.search]); // Dependensi untuk memanggil fetchSearchNews saat ada perubahan parameter

    const handleNextPage = (): number => {
        return controller.searchedNews.data.page + 1; // Menentukan halaman berikutnya
    }

    const handleScroll = useCallback(() => {
        // Menangani infinite scroll ketika pengguna mencapai bagian bawah halaman
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50 && !controller.searchedNews.isLoading) {
            if (controller.searchedNews.isFulfilled && controller.searchedNews.data.page <= controller.searchedNews.data.total) {
                controller.fetchSearchNews({
                    slug: category,
                    author: author === null ? author : Number(author),
                    title: search,
                    tag: tag,
                    page: Number(handleNextPage) // Memuat data untuk halaman berikutnya
                })
            }
        }
    }, [])

    useEffect(() => {
        // Menambahkan event listener untuk scroll
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll); // Menghapus event listener saat komponen dibersihkan
    }, [controller.applicationDispatch]);

    // const handlePageChange = () => {
    //     if (controller.searchedNews.data.next_url) {
    //         navigate(controller.searchedNews.data.next_url); // Navigasi ke halaman berikutnya (jika ada)
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
        ) : (<div></div>) // Menampilkan loading atau kosong jika data belum terisi
    );
};

export default SearchPage;
