import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const Wrapper = styled.div`
    transition: 1s;
    background: ${({ theme }) =>
        theme.dark ? gray[900] : theme.global.primaryColor[100]}; ;
`;

export default Wrapper;
