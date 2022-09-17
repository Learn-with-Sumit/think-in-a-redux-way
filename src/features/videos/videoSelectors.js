import { createSelector } from "reselect";

export const selectAllVideos = (state) => state.videos.videos;
export const selectWatchedVideos = (state) =>
    state.videos.videos.filter((v) => v.watched === true);
export const selectUnWatchedVideos = (state) =>
    state.videos.videos.filter((v) => v.watched === false);

export const selectMemoizedWatchedVideos = createSelector(
    selectAllVideos,
    (allVideos) => {
        return allVideos.filter((v) => v.watched === true);
    }
);

export const selectMemoizedUnWatchedVideos = createSelector(
    selectAllVideos,
    (allVideos) => {
        console.log("running output selector");
        return allVideos.filter((v) => v.watched === false);
    }
);

export const selectMemoizedFilteredVideos = () =>
    createSelector(
        selectAllVideos,
        (state, filter) => filter,
        (allVideos, filter) => {
            return allVideos.filter((v) => v.watched === filter);
        }
    );
