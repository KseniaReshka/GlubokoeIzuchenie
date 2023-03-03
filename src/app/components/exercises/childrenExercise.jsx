import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormCompanent = ({ children }) => {
    const arrayChild = React.Children.toArray(children);
    console.log("arrayChild", arrayChild);
    return React.Children.map(arrayChild, (child) => {
        console.log("child.key", child.key);
        const config = {
            ...child.props,
            value: +child.key.replace(".", "") + 1
        };
        console.log("config", config);
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormCompanent>
                <Component />
                <Component />
                <Component />
            </FormCompanent>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{`Компонент ${value}`}</div>;
};
Component.propTypes = {
    value: PropTypes.string
};
export default ChildrenExercise;
