const { DDECREMENT, DINCREMENT } = require("./actionTypes");
const { INCREMENT } = require("../counter/actionTypes");

// initial state
const initialState = {
    count: 0,
};

// reducer
const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMENT:
            return {
                ...state,
                count: state.count + action.payload,
            };

        case DDECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
            };

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        default:
            return state;
    }
};

module.exports = dynamicCounterReducer;
