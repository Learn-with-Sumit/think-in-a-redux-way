//_____________________select dom elements
const counterEl = document.querySelector('#counter')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')


//_______________initial state  => Frist Step
const initialState = {
    value : 0,
}

//_______________create reducer function => Second step
function counterReducer(state = initialState, action) {
    if(action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    } else if  (action.type === 'decrement'){
        return {
            ...state,
            value: state.value - 1,
        }
        
    }else {
        return state
    }
}

//_______________create Store  => Third step

const store = Redux.createStore(counterReducer)
//------> for vanilla js -> store subscrition ->
const render = () => {
    const state = store.getState()
    counterEl.innerText = state.value.toString()
}
//update ui first to show a default value o->
render()

store.subscribe(render)


//________________action dispatch (event listener handling) -> Fourth Step
incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment',
    })
})
decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    })
})











// // select dom elements
// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

// // initial state
// const initialState = {
//     value: 0,
// };

// // create reducer function
// function counterReducer(state = initialState, action) {
//     if (action.type === "increment") {
//         return {
//             ...state,
//             value: state.value + 1,
//         };
//     } else if (action.type === "decrement") {
//         return {
//             ...state,
//             value: state.value - 1,
//         };
//     } else {
//         return state;
//     }
// }

// // create store
// const store = Redux.createStore(counterReducer);

// const render = () => {
//     const state = store.getState();
//     counterEl.innerText = state.value.toString();
// };

// // update UI initially
// render();

// store.subscribe(render);

// // button click listeners
// incrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "increment",
//     });
// });

// decrementEl.addEventListener("click", () => {
//     store.dispatch({
//         type: "decrement",
//     });
// });
