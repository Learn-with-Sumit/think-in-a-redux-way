const store = require("./store");
const { increment } = require("./counter/actions");

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
store.dispatch(increment());
store.dispatch(increment());
