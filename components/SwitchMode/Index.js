import React from "react";
import styled from "styled-components";

const InnerCheck = styled.input.attrs({ type: "checkbox" })`
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

    & + div {
        opacity: 0.7;
        box-shadow: 0 0 0px 3px ${({ theme }) => theme.global.primaryColor[500]};
        transition: 0.4s;
    }

    &:focus {
        & + div {
            opacity: 1;
        }
    }
`;

const LabelWrapper = styled.label`
    display: flex;
    height: 2rem;
    width: 5rem;
    z-index: 0;

    cursor: pointer;
    border-radius: 100px;
    position: relative;
    ${(props) =>
        props.checked
            ? `justify-content: flex-start`
            : `justify-content: flex-end`};

    &:hover,
    &:focus {
        div {
            opacity: 1;
        }
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border-radius: 100px;
        font-size: 0.7rem;
        color: #ffffffaa;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0.03rem 0.03rem 0.06rem #000000cc;
        margin: auto 0.4rem;
        opacity: 0.8;
    }

    &:before {
        content: "";
        width: 2rem;
        height: 2rem;
        background: ${(props) => (props.checked ? `#00000055` : `#ffe186cc`)};
        border-radius: 100px;
        position: absolute;
        transition: 0.4s;
        ${(props) => (props.checked ? `left: 3rem` : `left: 0`)};
    }

    div {
        display: inline-block;
        height: 2rem;
        background: ${({ theme }) => theme.global.primaryColor[500]};
        width: 100%;
        position: absolute;
        border-radius: 100px;
        z-index: -1;
    }
`;

const SwitchMode = (props) => (
    <LabelWrapper {...props}>
        <InnerCheck {...props} />
        <div></div>
        <span>{props.checked ? "Dark" : "Light"}</span>
    </LabelWrapper>
);

export default SwitchMode;
