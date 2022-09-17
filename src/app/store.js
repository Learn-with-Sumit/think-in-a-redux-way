import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filters/filterSlice";
import videosReducer from "../features/videos/videoSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        filters: filtersReducer,
    },
});
