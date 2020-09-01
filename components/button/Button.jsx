import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

// function Button({ children }) {
//     return <button>{children}</button>;
// }

function colorHandler(buttonProps) {
    // console.log(buttonProps);
    // return "orange";
    return buttonProps.primary
        ? buttonProps.theme.global.primaryColor.dark
        : `#f3f3f3`;
}

const Button = styled.button`
    background: ${(props) =>
        props.primary
            ? props.theme.global.primaryColor.normal
            : props.theme.global.regularColor};
    padding: 0.8rem 1.8rem;
    border: ${(props) =>
        props.primary ? "0px solid transparent" : "1px solid #bbb"};
    color: ${(props) => (props.primary ? "#fff" : "#777")};
    transition: 0.3s;
    border-radius: ${(props) => props.theme.global.cornerRadius}px;
    font-weight: bold;
    margin-left: ${(props) => (props.marginLeft ? `1rem` : 0)};

    &:hover {
        background: ${(props) => colorHandler(props)};
    }
`;

export default Button;
