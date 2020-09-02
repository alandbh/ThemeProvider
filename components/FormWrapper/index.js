import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

const FormWrapper = styled.div`
    background: ${({ theme }) => (theme.dark ? gray[800] : `#fff`)};
    width: 450px;
    box-shadow: 0 3px 20px #00000010;
    padding: 2.3rem 1.8rem;
    border-radius: 4px;
    color: ${({ theme }) =>
        theme.dark
            ? theme.global.primaryColor[400]
            : theme.global.primaryColor.normal};
`;

export default FormWrapper;
