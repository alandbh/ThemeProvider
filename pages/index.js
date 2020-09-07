import { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { blue } from "../components/Colors";
import styles from "../styles/Home.module.css";
import Theme from "../components/Theme";
import Button from "../components/Button";
import Wrapper from "../components/layout";
import Heading from "../components/Heading";
import Link from "../components/Link";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";
import Container from "../components/Container";
import Drawer from "../components/Drawer";
import ToggleMenu from "../components/ToggleMenu";
import ColorRadio from "../components/ColorRadio";
import Range from "../components/Range";
import SwitchMode from "../components/SwitchMode/Index";

const drawerStyles = {
    group: {
        marginBottom: 70,
    },
    colorWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
};

export default function Home() {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState("purple");
    const [selectedElevation, setSelectedElevation] = useState("2");
    const [selectedRadius, setSelectedRadius] = useState("6");

    return (
        <Theme
            dark={isDark}
            primaryColor={selectedColor}
            radius={selectedRadius}
            elevation={selectedElevation}
        >
            <Head>
                <title>Aurora Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper drawer={isOpen}>
                <Drawer open={isOpen}>
                    <div style={drawerStyles.group}>
                        <Heading color="#ffffff77" level={4}>
                            Dark / Light Mode
                        </Heading>

                        <SwitchMode
                            onChange={() => setIsDark(!isDark)}
                            checked={isDark}
                        />
                    </div>

                    <div style={drawerStyles.group}>
                        <Heading color="#ffffff77" level={4}>
                            Primary Color
                        </Heading>
                        <div style={drawerStyles.colorWrapper}>
                            <ColorRadio
                                type="radio"
                                name="primaryColor"
                                value="blue"
                                checked={selectedColor === "blue"}
                                onChange={() => setSelectedColor("blue")}
                            />
                            <ColorRadio
                                type="radio"
                                name="primaryColor"
                                value="purple"
                                checked={selectedColor === "purple"}
                                onChange={() => setSelectedColor("purple")}
                            />
                            <ColorRadio
                                type="radio"
                                name="primaryColor"
                                value="red"
                                checked={selectedColor === "red"}
                                onChange={() => setSelectedColor("red")}
                            />
                            <ColorRadio
                                type="radio"
                                name="primaryColor"
                                value="orange"
                                checked={selectedColor === "orange"}
                                onChange={() => setSelectedColor("orange")}
                            />
                        </div>
                    </div>

                    <div style={drawerStyles.group}>
                        <Heading color="#ffffff77" level={4}>
                            Elevation
                        </Heading>

                        <Range
                            type="range"
                            min="1"
                            max="5"
                            value={selectedElevation}
                            onChange={(ev) =>
                                setSelectedElevation(ev.target.value)
                            }
                        />
                    </div>

                    <div style={drawerStyles.group}>
                        <Heading color="#ffffff77" level={4}>
                            Corner Radius
                        </Heading>

                        <Range
                            type="range"
                            min="0"
                            max="25"
                            id="radius"
                            value={selectedRadius}
                            onChange={(ev) =>
                                setSelectedRadius(ev.target.value)
                            }
                        />
                    </div>
                </Drawer>
                <Container>
                    <ToggleMenu
                        onChange={() => setIsOpen(!isOpen)}
                        checked={isOpen}
                    />

                    <main className={styles.main}>
                        <Heading level={1}>Welcome aboard!</Heading>
                        <FormWrapper>
                            <Input
                                type="text"
                                placeholder="Username"
                                id="username"
                                label="Username"
                            />

                            <Input
                                type="password"
                                name="password"
                                id="password"
                                label="Password"
                                error="Choose a safer password"
                            />

                            <label className="check">
                                <input type="checkbox" />
                                <span className="text-sm">
                                    I'm just an option!
                                </span>
                            </label>
                            <div className="commands">
                                <Button>Cancel</Button>
                                <Button primary marginLeft>
                                    Create My Account
                                </Button>
                            </div>
                            <div className="have-account ">
                                <Link href="http://google.com">
                                    I already have an account.
                                </Link>
                            </div>
                        </FormWrapper>
                    </main>
                </Container>
            </Wrapper>
        </Theme>
    );
}
