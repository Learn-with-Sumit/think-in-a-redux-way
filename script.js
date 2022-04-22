// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};

// initial state
const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 6,
    },
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else if (action.type === ITEST) {
        const updatedState = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,
            },
        };

        return updatedState;
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(3));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});
