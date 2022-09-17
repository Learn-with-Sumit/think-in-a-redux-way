import React, { useContext, useRef } from "react";
import DataContext from "../contexts/DataContext";

const Pros = () => {
    const { pros = 0 } = useContext(DataContext) || {};
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of pros: {pros}</p>
            <p>Pros component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(Pros);
