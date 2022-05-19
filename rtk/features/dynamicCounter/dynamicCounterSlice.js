const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
    count: 0,
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
