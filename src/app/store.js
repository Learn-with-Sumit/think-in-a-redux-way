import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
    },
});
