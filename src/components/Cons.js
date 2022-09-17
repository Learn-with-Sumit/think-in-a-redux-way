import React, { useContext, useRef } from "react";
import DataContext from "../contexts/DataContext";

const Cons = () => {
    const { cons = 0 } = useContext(DataContext) || {};
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of cons: {cons}</p>
            <p>Cons component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(Cons);
