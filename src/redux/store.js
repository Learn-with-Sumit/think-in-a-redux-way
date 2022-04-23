import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

const store = createStore(counterReducer);

export default store;
