import React from "react";
import { ThemeProvider } from "styled-components";
import { blue, red, gray, purple } from "./Colors";
class ThemeParams {
    constructor(
        primaryColor,
        secondaryColor,
        regularColor,
        cornerRadius,
        themeColor
    ) {
        this.primaryColor = primaryColor;
        this.backgroundColor = primaryColor[100];
        this.secondaryColor = secondaryColor;
        this.regularColor = regularColor;
        this.cornerRadius = cornerRadius;
        this.themeColor = themeColor || "light";
    }
}

const Theme = ({ children, dark }) => {
    console.log(dark);
    const myTheme = {
        global: new ThemeParams(purple, gray[100], "#fff", 6),
        dark,
    };

    return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};
export default Theme;
