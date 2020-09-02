import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const Wrapper = styled.div`
    background: ${({ theme }) =>
        theme.dark ? gray[900] : theme.global.backgroundColor}; ;
`;

export default Wrapper;
