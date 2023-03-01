import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const fact = factorial(value);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result fact:{fact}</p>
                <button
                    className="btn btn-pimary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 100)}
                >
                    increment
                </button>
                <button
                    className="btn btn-pimary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 100)}
                >
                    decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
