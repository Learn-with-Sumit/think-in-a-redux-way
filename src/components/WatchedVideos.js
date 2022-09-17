import { shallowEqual, useSelector } from "react-redux";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
    const watchedVideos = useSelector(
        (state) => state.videos.videos.filter((v) => v.watched),
        shallowEqual
    );

    console.log("[WatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {watchedVideos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
