import React from "react";
import { ThemeProvider } from "styled-components";
import { blue, red, purple, orange } from "./Colors";
class ThemeParams {
    constructor(primaryColor, danger, cornerRadius) {
        this.primaryColor = primaryColor;
        this.danger = danger;
        this.cornerRadius = cornerRadius;
    }
}

const Theme = ({ children, dark }) => {
    const myTheme = {
        global: {
            primaryColor: purple,
            danger: red,
            cornerRadius: 6,
        },
        dark,
    };

    return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};
export default Theme;
