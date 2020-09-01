import React from "react";
import { ThemeProvider } from "styled-components";
import { blue, red, gray, purple } from "./Colors";

const lightTheme = {
    primaryColor: blue,
    secondaryColor: gray[100],
    regularColor: "#fff",
    cornerRadius: 6,
};
class ThemeLight {
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
class ThemeDark {
    constructor(
        primaryColor,
        secondaryColor,
        backgroundColor,
        regularColor,
        cornerRadius
    ) {
        this.primaryColor = primaryColor;
        this.backgroundColor = backgroundColor;
        this.secondaryColor = secondaryColor;
        this.regularColor = regularColor;
        this.cornerRadius = cornerRadius;
    }
}

const myTheme = {
    global: new ThemeLight(blue, gray[100], "#fff", 6),
};

const Theme = ({ children }) => (
    <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
);

export default Theme;
