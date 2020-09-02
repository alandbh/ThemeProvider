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

export default function Home() {
    const [dark, setDark] = useState(false);

    const [isOpen, setIsOpen] = useState(true);
    return (
        <Theme dark={dark}>
            <Head>
                <title>Aurora Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Drawer open={isOpen}>asasa</Drawer>
                <Container>
                    <ToggleMenu
                        onChange={() => setIsOpen(!isOpen)}
                        checked={isOpen}
                    />
                    <div style={{ marginTop: 40, marginBottom: "-140px" }}>
                        <DarkModeToggle
                            onChange={() => setDark(!dark)}
                            checked={dark}
                            size={60}
                        />
                    </div>

                    <main className={styles.main}>
                        <Heading>Welcome aboard!</Heading>
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
