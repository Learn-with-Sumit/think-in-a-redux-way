import { createSlice } from "@reduxjs/toolkit";
import videos from "../../data/videos";

const initialState = {
    videos,
};

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        addVideo: (state, action) => {
            state.videos.push(action.payload);
        },
        updateVideo: (state, action) => {
            const videoIndexToUpdate = state.videos.findIndex(
                (v) => v.id === action.payload
            );
            state.videos[videoIndexToUpdate].watched =
                !state.videos[videoIndexToUpdate].watched;
        },
    },
});

export default videoSlice.reducer;
export const { addVideo, updateVideo } = videoSlice.actions;
