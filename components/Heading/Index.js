import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    color: ${({ theme }) =>
        theme.dark
            ? theme.global.primaryColor[400]
            : theme.global.primaryColor.normal};
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

export default Heading;
