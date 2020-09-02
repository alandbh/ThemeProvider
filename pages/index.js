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

export default function Home() {
    const [dark, setDark] = useState(false);
    function handleDark() {
        setDark(!dark);
    }
    return (
        <Theme dark={dark}>
            <Wrapper>
                <div className={styles.container}>
                    <div style={{ marginTop: 40, marginBottom: "-140px" }}>
                        <DarkModeToggle
                            onChange={handleDark}
                            checked={dark}
                            size={60}
                        />
                    </div>
                    <Head>
                        <title>Create Next App</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

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
                </div>
            </Wrapper>
        </Theme>
    );
}
