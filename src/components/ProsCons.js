import React, { useRef } from "react";
import { useSelector } from "react-redux";

const ProsCons = () => {
    const { pros, cons } = useSelector((state) => state.proscons);
    const renders = useRef(0);

    return (
        <div className="space-y-2">
            <p>No of pros and cons: {pros + cons}</p>
            <p>ProsCons component renders: {renders.current++}</p>
        </div>
    );
};

export default React.memo(ProsCons);
