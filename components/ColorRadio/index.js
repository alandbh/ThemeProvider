import React from "react";
import styled from "styled-components";
import { gray, blue, red } from "../Colors";

// import { Container } from './styles';

const HiddenRadio = styled.input.attrs({ type: "radio" })`
    // Hide checkbox visually but remain accessible to screen readers.
    // Source: https://polished.js.org/docs/#hidevisually
    /* border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px; */
`;

const StyledRadio = styled.div`
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    /* background: ${(props) => (props.checked ? "red" : "blue")}; */
    transition: all 150ms;
    position: relative;

    /* border: 1px solid red; */
    overflow: hidden;

    &:after,
    &:before {
        content: "";
        display: inline-block;
    }

    &:after {
        top: calc(100% - 5px);
        /* transform: rotate(-36deg); */
    }
    &:before {
        top: 0;
        transform-origin: 4px 0%;
        /* transform: rotate(36deg); */
    }

    ${(props) =>
        props.checked
            ? `
            height: 1.5rem;
            border-radius: 40px;
    &:after {
        width: 1.5rem;
    }
    &:before {
        width: 1.5rem;
        border: 1px solid white;
        transform: scale(2,2)
    }
    `
            : `
    &:after {
        transform: rotate(0deg);
    }
    &:before {
        transform: rotate(0deg);
    }
    `}
`;

const RadioContainer = styled.label`
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    background: ${(isChecked) => {
        console.log(isChecked);
    }};
    cursor: pointer;
`;

const ColorRadio = (props) => (
    <>
        <RadioContainer {...props} isChecked={props.checked}>
            <HiddenRadio checked={props.checked} {...props} />
        </RadioContainer>
    </>
);

export default ColorRadio;
