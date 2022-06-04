import Footer from "../components/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home() {
    return (
        <>
            <Navbar />
            <Tags />
            <VideoGrid />
            <Pagination />
            <Footer />
        </>
    );
}
