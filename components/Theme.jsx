import React from "react";
import { ThemeProvider } from "styled-components";
import { blue, red, purple, orange } from "./Colors";

/**
 * Setting Up Theme Object
 */
const themeObject = {
    global: {
        primaryColor: purple,
        cornerRadius: 4,
        elevation: 5,
        danger: red,
    },
    dark: false,
};

class ThemeParams {
    constructor({ primaryColor, danger, cornerRadius, elevation }) {
        const depth = {
            1: "0 1px 1px 0 rgba(0, 0, 0, 0.16)",
            2: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
            3: "0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.23)",
            4: "0 10px 20px 0 rgba(0, 0, 0, 0.19), 0 6px 6px 0 rgba(0, 0, 0, 0.26)",
            5: "0 14px 28px 0 rgba(0, 0, 0, 0.25), 0 10px 10px 0 rgba(0, 0, 0, 0.26)",
        };
        this.primaryColor = primaryColor;
        this.danger = danger;
        this.cornerRadius = cornerRadius;
        this.elevation = depth[elevation];
    }
}

const Theme = ({ children, dark, primaryColor, radius, elevation }) => {
    const colorObject = {
        red: red,
        blue: blue,
        purple: purple,
        orange: orange,
    };

    /**
     * Setting Up Dynamic Theme Object
     */

    const dynamicTheme = {
        global: new ThemeParams({
            primaryColor: colorObject[primaryColor],
            cornerRadius: radius,
            elevation: elevation,
            danger: red,
        }),
        dark,
    };

    return <ThemeProvider theme={dynamicTheme}>{children}</ThemeProvider>;
};
export default Theme;
