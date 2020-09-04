import React from "react";
import styled from "styled-components";
import { gray } from "../Colors";

// import { Container } from './styles';

const InnerWrapper = styled.div`
    transition: 1s;
    background: ${({ theme }) =>
        theme.dark ? gray[900] : theme.global.primaryColor[100]};
    overflow-x: hidden;
`;

const Overflow = styled.div`
    display: flex;
    transition: 0.4s;
    width: ${(props) => (props.drawer ? `calc(100% + 300px)` : `100%`)};
`;

const Wrapper = (props) => {
    return (
        <InnerWrapper {...props}>
            <Overflow {...props}>{props.children}</Overflow>
        </InnerWrapper>
    );
};

export default Wrapper;
