import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [xState, setXState] = useState("false");
    const toggleXState = () => {
        setXState((prevState) => (prevState === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = xState;
    }, [xState]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>prev state:{prevState.current}</p>
            <p>x state:{xState}</p>
            <button className="btn btn-primary" onClick={toggleXState}>
                toglle x state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
