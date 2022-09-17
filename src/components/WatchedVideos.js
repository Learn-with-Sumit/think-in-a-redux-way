import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoizedFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
    const selectWatchedVideos = useMemo(selectMemoizedFilteredVideos, []);

    const watchedVideos = useSelector((state) =>
        selectWatchedVideos(state, true)
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
