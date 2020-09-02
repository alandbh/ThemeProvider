import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

const FormWrapper = styled.div`
    background: ${({ theme }) => (theme.dark ? gray[800] : `#fff`)};
    width: 450px;
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
