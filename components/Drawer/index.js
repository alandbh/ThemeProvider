import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const Drawer = styled.div`
    width: ${(props) => (props.open ? 200 : 0)}px;
    height: 100vh;
    background: ${gray[800]};
    overflow: hidden;
    transition: 0.4s;
`;

export default Drawer;
