import { useDispatch } from "react-redux";
import { updateVideo } from "../features/videos/videoSlice";

export default function VideoItem({ video }) {
    const { title, link, watched, id } = video;
    const dispatch = useDispatch();

    const icon = watched ? "❌" : "✅";

    const editVideo = (id) => {
        dispatch(updateVideo(id));
    };

    // console.log("[VideoItem] renders");

    return (
        <li className="flex justify-between py-2">
            <a href={link}>{title}</a>
            <span
                className="text-sm cursor-pointer"
                onClick={() => editVideo(id)}
            >
                {icon}
            </span>
        </li>
    );
}
