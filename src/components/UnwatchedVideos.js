import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoizedFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function UnWatchedVideos() {
    const selectUnWatchedVideos = useMemo(selectMemoizedFilteredVideos, []);

    const unwatchedVideos = useSelector((state) =>
        selectUnWatchedVideos(state, false)
    );

    console.log("[UnWatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {unwatchedVideos.map((video) => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
