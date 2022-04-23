import { Provider } from "react-redux";
import HooksCounter from "./components/HooksCounter";
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>

                <div className="max-w-md mx-auto mt-10 space-y-5">
                    <HooksCounter id="1" />
                </div>
            </div>
        </Provider>
    );
}
