import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Cons = () => {
    const cons = useSelector((state) => state.proscons.cons);
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of cons: {cons}</p>
            <p>Cons component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(Cons);
