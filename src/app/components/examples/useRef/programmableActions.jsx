import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handeleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handeleClickWith = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-labl">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handeleClick}>
                кнопка
            </button>
            <button className="btn btn-secondary" onClick={handeleClickWith}>
                ширина
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
