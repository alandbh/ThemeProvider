import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/button/Button";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";
import Wrapper from "../components/layout";
import Heading from "../components/Heading/Index";
import Link from "../components/Link/Index";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import Container from "../components/Container";
import Drawer from "../components/Drawer";
import ToggleMenu from "../components/ToggleMenu";
import { blue } from "../components/Colors";
import ColorRadio from "../components/ColorRadio";
import Range from "../components/Range";

export default function Home() {
    const [dark, setDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState("blue");
    const [elevation, setElevation] = useState("2");
    const [radius, setRadius] = useState("4");

    return (
        <Theme
            dark={dark}
            primaryColor={selectedColor}
            radius={radius}
            elevation={elevation}
        >
            <Head>
                <title>Aurora Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper drawer={isOpen}>
                <Drawer open={isOpen}>
                    <Heading color="#ffffff77" level={4}>
                        Dark / Light Mode
                    </Heading>
                    <DarkModeToggle
                        onChange={() => setDark(!dark)}
                        checked={dark}
                        size={60}
                    />
                    <Heading color="#ffffff77" level={4}>
                        Primary Color
                    </Heading>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
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
                    <Heading color="#ffffff77" level={4}>
                        Elevation
                    </Heading>

                    <Range
                        type="range"
                        min="1"
                        max="5"
                        value={elevation}
                        onChange={(ev) => setElevation(ev.target.value)}
                    />
                    <Heading color="#ffffff77" level={4}>
                        Elevation
                    </Heading>

                    <Range
                        type="range"
                        min="0"
                        max="25"
                        value={radius}
                        onChange={(ev) => setRadius(ev.target.value)}
                    />
                </Drawer>
                <Container>
                    <ToggleMenu
                        onChange={() => setIsOpen(!isOpen)}
                        checked={isOpen}
                    />
                    <div
                        style={{ marginTop: 40, marginBottom: "-140px" }}
                    ></div>

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
