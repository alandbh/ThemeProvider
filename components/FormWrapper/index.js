import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

const FormWrapper = styled.div`
    background: ${({ theme }) => (theme.dark ? gray[800] : `#fff`)};
    max-width: 470px;
    margin: 0 20px;
    width: 100%;
    box-shadow: ${({ theme }) => theme.global.elevation};
    padding: 2.3rem 1.8rem;
    border-radius: ${({ theme }) =>
        theme.global.cornerRadius > 15 ? 15 : theme.global.cornerRadius}px;
    color: ${({ theme }) =>
        theme.dark
            ? theme.global.primaryColor[400]
            : theme.global.primaryColor.normal};
`;

export default FormWrapper;
