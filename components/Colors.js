class ColorMaker {
    constructor(colorObj, colorName) {
        const colorNormal = colorObj[500] || colorObj[Object.keys(colorObj)[0]],
            color100 = colorObj[100] || colorObj[Object.keys(colorObj)[0]],
            color200 = colorObj[200] || colorObj[Object.keys(colorObj)[0]],
            color300 = colorObj[300] || colorObj[Object.keys(colorObj)[0]],
            color400 = colorObj[400] || colorObj[Object.keys(colorObj)[0]],
            color500 = colorObj[500] || colorObj[Object.keys(colorObj)[0]],
            color600 =
                colorObj[600] || colorObj[Object.keys(colorObj).slice(-1)[0]],
            color700 =
                colorObj[700] || colorObj[Object.keys(colorObj).slice(-1)[0]],
            color800 =
                colorObj[800] || colorObj[Object.keys(colorObj).slice(-1)[0]],
            color900 =
                colorObj[900] || colorObj[Object.keys(colorObj).slice(-1)[0]];

        this.light = "#" + colorObj[Object.keys(colorObj)[0]];
        this.normal = "#" + colorNormal;
        this.dark = "#" + colorObj[Object.keys(colorObj).slice(-1)[0]];
        this.name = colorName;
        this[100] = "#" + color100;
        this[200] = "#" + color200;
        this[300] = "#" + color300;
        this[400] = "#" + color400;
        this[500] = "#" + color500;
        this[600] = "#" + color600;
        this[700] = "#" + color700;
        this[800] = "#" + color800;
        this[900] = "#" + color900;
    }
}

export const blue = new ColorMaker(
    {
        100: "ebf3fb",
        400: "4199f1",
        500: "1272d1",
        600: "1358b3",
        700: "0d2e79",
    },
    "blue"
);
export const green = new ColorMaker(
    {
        400: "319c4c",
        500: "28873f",
    },
    "green"
);
export const orange = new ColorMaker(
    {
        400: "fcc551",
        500: "fb9900",
    },
    "orange"
);
export const red = new ColorMaker(
    {
        100: "fff6f5",
        400: "f84a3e",
        500: "e91b0d",
        600: "c20e02",
        700: "921007",
    },
    "red"
);
export const purple = new ColorMaker(
    {
        100: "f5f3fd",
        400: "9081da",
        500: "7767ce",
        600: "5b4bb1",
    },
    "purple"
);
export const gray = new ColorMaker(
    {
        100: "f6f8f9",
        200: "ecf0f4",
        300: "e1e4e9",
        400: "ced6df",
        500: "9faabd",
        600: "8597af",
        700: "5a6d88",
        800: "4a5a70",
        900: "323d4c",
    },
    "gray"
);
