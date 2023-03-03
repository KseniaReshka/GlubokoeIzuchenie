import React from "react";
import PropTypes from "prop-types";

export const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    // const { onLogin, onLogOut, isAuth } = props;
    console.log("isAuth", isAuth);
    return (
        <div>
            {isAuth ? (
                <button onClick={onLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={onLogin}>Войти</button>
            )}
        </div>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired
};

// export default SimpleComponent;

// Наш Higher-Order Component
export const withFunctions = (Component) => {
    return (props) => {
        const localKay = localStorage.getItem("auth");
        console.log("localKay", localKay);
        const first = () => {
            console.log("irst");
            return localStorage.setItem("auth", "token");
        };
        const first2 = () => {
            console.log("2irst");
            return localStorage.removeItem("auth");
        };
        return (
            <Component onLogin={first} onLogOut={first2} isAuth={localKay} />
        );
    };
};

// export default withFunctions(SimpleComponent);
