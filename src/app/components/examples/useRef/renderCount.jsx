import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [xState, setXState] = useState(false);
    const toggleXState = () => {
        setXState(!xState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count:{renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleXState}>
                toglle x state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
