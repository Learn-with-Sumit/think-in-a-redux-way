const { DECREMENT, INCREMENT } = require("./actionTypes");

const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};

module.exports = {
    increment,
    decrement,
};
