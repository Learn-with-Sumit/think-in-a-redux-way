import { configureStore } from "@reduxjs/toolkit";
import prosconsReducer from "../features/proscons/prosconsSlice";

export const store = configureStore({
    reducer: {
        proscons: prosconsReducer,
    },
});
