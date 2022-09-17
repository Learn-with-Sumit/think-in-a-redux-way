import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Pros = () => {
    const pros = useSelector((state) => state.proscons.pros);
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of pros: {pros}</p>
            <p>Pros component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(Pros);
