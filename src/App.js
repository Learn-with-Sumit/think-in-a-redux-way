import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cons from "./components/Cons";
import Pros from "./components/Pros";
import ProsCons from "./components/ProsCons";
import {
    incrementCons,
    incrementPros,
} from "./features/proscons/prosconsSlice";

function App() {
    const { pros, cons } = useSelector((state) => state.proscons);
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen p-10">
            <div className="space-y-8">
                <h1 className="font-bold text-xl">REDUX</h1>
                <h3 className="font-bold text-lg">Pros: {pros}</h3>
                <h3 className="font-bold text-lg">Const: {cons}</h3>

                <ProsCons />
                <Pros />
                <Cons />

                <div className="space-x-3">
                    <button
                        className="bg-green-600 px-3 py-2 text-white rounded"
                        onClick={() => dispatch(incrementPros())}
                    >
                        Increment pros
                    </button>
                    <button
                        className="bg-red-600 px-3 py-2 text-white rounded"
                        onClick={() => dispatch(incrementCons())}
                    >
                        Increment cons
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
