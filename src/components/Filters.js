import { useDispatch } from "react-redux";
import { statusChanged } from "../features/filters/filterSlice";

export default function Filters() {
    const dispatch = useDispatch();

    const filterWatched = (status) => {
        dispatch(statusChanged(status));
    };

    return (
        <div className="flex space-x-4">
            <span className="text-sm">Filter by:</span>
            <button className="text-sm" onClick={() => filterWatched("all")}>
                All
            </button>
            <button className="text-sm" onClick={() => filterWatched(true)}>
                ✅
            </button>
            <button className="text-sm" onClick={() => filterWatched(false)}>
                ❌
            </button>
        </div>
    );
}
