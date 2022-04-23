import { DDECREMENT, DINCREMENET } from "./actionTypes";

export const increment = (value) => {
    return {
        type: DINCREMENET,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value,
    };
};
