import React, { useContext, useRef } from "react";
import DataContext from "../contexts/DataContext";

const ProsCons = () => {
    const { pros = 0, cons = 0 } = useContext(DataContext) || {};
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of pros and cons: {pros + cons}</p>
            <p>ProsCons component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(ProsCons);
