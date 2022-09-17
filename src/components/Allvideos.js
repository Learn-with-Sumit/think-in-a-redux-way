import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

export default function AllVideos() {
    const filter = useSelector((state) => state.filters.watchStatus);

    const videos = useSelector((state) =>
        state.videos.videos.filter((v) => {
            if (filter === "all") return true;
            else return v.watched === filter;
        })
    );

    console.log("[AllVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {videos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
