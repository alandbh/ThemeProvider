import React from "react";
import styled from "styled-components";
import { gray, blue, red } from "../Colors";

// import { Container } from './styles';

function getPosition(min, max, value, drop) {
    const range = max - min;
    const difference = value - min;
    const percentage = (difference / range) * 100;
    if (percentage === 100) {
        return `calc(${percentage}% - ${drop + 0}px)`;
    } else if (percentage === 0) {
        return `calc(${percentage}% + ${drop - 16}px)`;
    } else {
        return `calc(${percentage}% - ${drop / 2}px)`;
    }
}

const InnerInput = styled.input.attrs({ type: "range" })`
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background: ${gray[300]};
    outline: none;
    opacity: 0.7;
    transition: 0.4s;

    &:focus {
        outline: none;
    }

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1rem;
        height: 1rem;
        background: ${({ theme }) => theme.global.primaryColor[400]};
        cursor: pointer;
        border-radius: 100%;
    }

    &::-moz-range-thumb {
        width: 1.3rem;
        height: 1.3rem;
        background: #4caf50;
        cursor: pointer;
    }
`;

const dropSize = 18;

const Drop = styled.span`
    color: #fff;
    display: inline-block;
    width: ${dropSize}px;
    height: ${dropSize}px;
    /* background: ${({ theme }) => theme.global.primaryColor[400]}; */
    position: absolute;
    top: 0;
    left: ${({ min, max, value }) => getPosition(min, max, value, dropSize)};
    text-align: center;
    transition: 0.4s;
    z-index: 1;
    font-size: 0.75rem;
    line-height: ${dropSize}px;

    &:before {
        content: "";
        display: inline-block;
        width: ${dropSize}px;
        height: ${dropSize}px;
        background: ${({ theme }) => theme.global.primaryColor[400]};
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0 50% 50% 50%;
        z-index: -1;
        transform: rotate(-130deg);
    }
`;

const RangeContainer = styled.div`
    position: relative;
    height: 40px;
    display: flex;
    align-items: flex-end;

    &:hover {
        > span {
            transform: scale(1.5) translateY(-5px);
        }
    }
`;

const Range = (props) => (
    <RangeContainer>
        <Drop {...props}>{props.value}</Drop>
        <InnerInput {...props} />
    </RangeContainer>
);

export default Range;
