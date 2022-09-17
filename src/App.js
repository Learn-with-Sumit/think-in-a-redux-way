import { useState } from "react";
import Cons from "./components/Cons";
import Pros from "./components/Pros";
import ProsCons from "./components/ProsCons";
import DataContext from "./contexts/DataContext";

function App() {
    const [data, setData] = useState({ pros: 0, cons: 0 });
    const { pros = 0, cons = 0 } = data || {};

    return (
        <div className="w-screen h-screen p-10">
            <div className="space-y-8">
                <h1 className="font-bold text-xl">CONTEXT API</h1>
                <h3 className="font-bold text-lg">Pros: {pros}</h3>
                <h3 className="font-bold text-lg">Const: {cons}</h3>

                <DataContext.Provider value={data}>
                    <ProsCons />
                    <Pros />
                    <Cons />
                </DataContext.Provider>

                <div className="space-x-3">
                    <button
                        className="bg-green-600 px-3 py-2 text-white rounded"
                        onClick={() =>
                            setData((d) => ({ ...d, pros: d.pros + 1 }))
                        }
                    >
                        Increment pros
                    </button>
                    <button
                        className="bg-red-600 px-3 py-2 text-white rounded"
                        onClick={() =>
                            setData((d) => ({ ...d, cons: d.cons + 1 }))
                        }
                    >
                        Increment cons
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
