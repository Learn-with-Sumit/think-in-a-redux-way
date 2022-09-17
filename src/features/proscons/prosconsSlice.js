import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pros: 0,
    cons: 0,
};

export const prosconsSlice = createSlice({
    name: "proscons",
    initialState,
    reducers: {
        incrementPros: (state) => {
            state.pros += 1;
        },
        incrementCons: (state) => {
            state.cons += 1;
        },
    },
});

export const { incrementCons, incrementPros } = prosconsSlice.actions;

export default prosconsSlice.reducer;
