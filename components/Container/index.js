import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    transition: 0.4s;
`;

export default Container;
