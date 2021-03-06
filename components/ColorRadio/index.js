import React from "react";
import styled from "styled-components";
import { gray, blue, red, purple, orange } from "../Colors";

// import { Container } from './styles';

const colorObject = {
    red: red[500],
    blue: blue[500],
    purple: purple[500],
    orange: orange[500],
};

const HiddenRadio = styled.input.attrs({ type: "radio" })`
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

const RadioContainer = styled.label`
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: ${({ value }) => colorObject[value]};
    cursor: pointer;
    transition: 0.5s;
    border-width: ${({ checked }) => (checked ? `4px` : `0px`)};
    border-style: solid;
    border-color: #ffffffaa;

    &:focus {
        box-shadow: 0 0 15px 5px ${({ value }) => colorObject[value] + `ff`};
    }

    box-shadow: 0 0 15px 5px
        ${({ value, checked }) =>
            checked ? colorObject[value] + `ff` : `#ffffff00`};
`;

const ColorRadio = (props) => (
    <>
        <RadioContainer {...props} isChecked={props.checked}>
            <HiddenRadio checked={props.checked} {...props} />
        </RadioContainer>
    </>
);

export default ColorRadio;
