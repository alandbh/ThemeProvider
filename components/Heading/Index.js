import React from "react";
import styled from "styled-components";

function getColor({ color, theme }) {
    if (color) {
        return color;
    }

    if (theme.dark) {
        return theme.global.primaryColor[400];
    } else {
        return theme.global.primaryColor.normal;
    }
}

const HeadingOne = styled.h1`
    color: ${(props) => getColor(props)};
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 1.1rem;
    &:before {
        content: "";
        display: inline-block;
        height: 8px;
        width: 50px;
        background: ${({ theme }) => theme.global.primaryColor.normal};
        position: absolute;
        top: 0;
    }
`;
const HeadingTwo = styled.h2`
    color: ${({ theme }) =>
        theme.dark
            ? theme.global.primaryColor[400]
            : theme.global.primaryColor.normal};
    display: flex;
    justify-content: center;
    padding-top: 1.1rem;
`;
const HeadingThree = styled.h3`
    color: ${(props) => props.color};
`;
const HeadingFour = styled.h4`
    color: ${(props) => props.color};
`;

const Heading = (props) => {
    if (props.level === 1) {
        return <HeadingOne {...props}>{props.children}</HeadingOne>;
    } else if (props.level === 2) {
        return <HeadingTwo {...props}>{props.children}</HeadingTwo>;
    } else if (props.level === 3) {
        return <HeadingThree {...props}>{props.children}</HeadingThree>;
    } else if (props.level === 4) {
        return <HeadingFour {...props}>{props.children}</HeadingFour>;
    }
};

export default Heading;
