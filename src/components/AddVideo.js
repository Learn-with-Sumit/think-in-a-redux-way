import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../features/videos/videoSlice";

export default function AddVideo() {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false);

    const insertVideo = () => {
        setDisabled(true);
        dispatch(
            addVideo({
                id: 4,
                title: "Think in a Redux way",
                link: "https://youtu.be/7InhI8NMsec",
                watched: true,
            })
        );
    };

    return (
        <div className="flex justify-end">
            <button
                disabled={disabled}
                onClick={insertVideo}
                className="px-3 py-2 bg-violet-600 text-white text-sm rounded-full"
            >
                Add Video
            </button>
        </div>
    );
}
