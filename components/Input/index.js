import React from "react";
import styled from "styled-components";
import { gray, blue, red } from "../Colors";

// import { Container } from './styles';

const InnerInput = styled.input`
    background: ${({ theme }) => (theme.dark ? gray[900] : `white`)};
    border: 1px solid ${({ theme }) => (theme.dark ? gray[800] : gray[500])};
    height: calc(2.7rem + 2px);
    display: block;
    width: 100%;
    padding: 0.6rem;
    border-radius: ${({ theme }) => theme.global.cornerRadius}px;
    color: ${({ theme }) => (theme.dark ? `#ddd` : `#1f2329`)};
    font-size: 0.875rem;

    &:focus {
        border: solid 1px ${blue[500]};
        outline: none;
    }

    &::placeholder {
        color: ${gray[600]};
    }
`;

const InnerLabel = styled.label`
    display: block;
    font-weight: bold;
    font-size: 0.875rem;
    color: ${({ theme }) => (theme.dark ? gray[300] : gray[900])};
`;

const ErrorMessage = styled.div`
    display: inline-block;
    color: ${({ theme }) => theme.global.danger[400]};
    margin-bottom: 1rem;
    margin-top: 0.3rem;
    font-size: 0.8rem;
`;

const Input = (props) => (
    <>
        <InnerLabel htmlFor={props.id}>{props.label}</InnerLabel>
        <InnerInput {...props} />
        <ErrorMessage>{props.error}</ErrorMessage>
    </>
);

export default Input;
