import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchStatus: "all",
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        statusChanged: (state, action) => {
            state.watchStatus = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { statusChanged } = filterSlice.actions;
