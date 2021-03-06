import React from "react";
import styled from "styled-components";

const InnerLink = styled.a`
    color: ${({ theme }) => theme.global.primaryColor[400]};
    font-weight: bold;
`;

const Link = (props) => <InnerLink href={props.href} {...props} />;

export default Link;
