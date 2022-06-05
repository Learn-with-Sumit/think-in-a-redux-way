import { getTags } from "./tagsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags();
    return tags;
});

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default tagsSlice.reducer;
