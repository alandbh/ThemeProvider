import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const OuterDrawer = styled.div`
    width: ${(props) => (props.open ? 300 : 0)}px;
    height: 100vh;
    background: ${gray[800]};
    overflow: hidden;
    transition: 0.4s;
`;

const InnerDrawer = styled.div`
    width: 300px;
    padding: 20px;
`;

const Drawer = (props) => {
    return (
        <>
            <OuterDrawer {...props}>
                <InnerDrawer {...props}>{props.children}</InnerDrawer>
            </OuterDrawer>
        </>
    );
};

export default Drawer;
