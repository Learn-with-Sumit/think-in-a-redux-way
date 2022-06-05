import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
    },
});
