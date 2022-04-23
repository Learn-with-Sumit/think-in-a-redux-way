import { DECREMENT, INCREMENET } from "./actionTypes";

export const increment = () => {
    return {
        type: INCREMENET,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};
