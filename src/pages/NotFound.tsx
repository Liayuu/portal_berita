import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen w-full">
            {/* Menampilkan Navbar di atas halaman */}
            <Navbar />
            
            {/* Menampilkan pesan "Halaman tidak ditemukan" di tengah halaman */}
            <div className="font=sans text-gray-800 h-full w-full flex items-center justify-center">
                <h3 className="font-light text-3xl items-center">Halaman tidak ditemukan</h3>
            </div>

            {/* Menampilkan Footer di bawah halaman */}
            <Footer />
        </div>
    )
}
