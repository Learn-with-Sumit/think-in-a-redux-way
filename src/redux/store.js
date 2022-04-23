import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    // pass action
    return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
