import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen w-full">
            <Navbar />
            <div className="font=sans text-gray-800 h-full w-full flex items-center justify-center">
                <h3 className="font-light text-3xl items-center">Halaman tidak ditemukan</h3>
            </div>
            <Footer />
        </div>
    )
}