import { DECREMENT, INCREMENET } from "./actionTypes";

export const increment = (value) => {
    return {
        type: INCREMENET,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
