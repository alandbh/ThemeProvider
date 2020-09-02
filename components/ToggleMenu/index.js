import React from "react";
import styled from "styled-components";
import { gray, blue, red } from "../Colors";

// import { Container } from './styles';

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    // Hide checkbox visually but remain accessible to screen readers.
    // Source: https://polished.js.org/docs/#hidevisually
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 2rem;
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
        height: 5px;
        /* background: #000; */
        background: ${({ theme }) => theme.global.primaryColor[500]};
        width: 100%;
        position: absolute;
        transform-origin: 0% 0%;
        transition: 0.4s;
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
            height: 2rem;
            border-radius: 40px;
    &:after {
        transform: rotate(-46.3deg);
        width: 154%;
        left: -7%;
        top: 100%;
    }
    &:before {
        transform: rotate(44.5deg);
        width: 154%
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

const CheckboxContainer = styled.label`
    top: 1rem;
    left: 1rem;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    cursor: pointer;
`;

const ToggleMenu = ({ checked, ...props }) => (
    <>
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked} />
        </CheckboxContainer>
    </>
);

export default ToggleMenu;
