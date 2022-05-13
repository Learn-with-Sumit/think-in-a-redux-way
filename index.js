const { createStore, applyMiddleware } = require("redux");
const {
    delayActionMiddleware,
    fetchAsyncMiddleware,
} = require("./middlewares");
const { fetchTodos } = require("./functions");

// initial state
const initialState = {
    todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload,
                    },
                ],
            };

        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };

        default:
            break;
    }
};

// store
const store = createStore(
    todoReducer,
    applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)
);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "Learn Redux from LWS",
// });

store.dispatch(fetchTodos);
