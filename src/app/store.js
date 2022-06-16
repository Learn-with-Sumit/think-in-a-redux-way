import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionReducer,
    },
});
