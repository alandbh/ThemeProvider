import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/button/Button";
import { ThemeProvider } from "styled-components";
import Theme from "../components/Theme";
import Wrapper from "../components/layout";
import Heading from "../components/Heading/Index";
import Link from "../components/Link/Index";

export default function Home() {
    return (
        <Theme>
            <Wrapper>
                <div className={styles.container}>
                    <Head>
                        <title>Create Next App</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main className={styles.main}>
                        <Heading>Welcome aboard!</Heading>
                        <div className="form-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Username"
                                id="username"
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
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
                        </div>
                    </main>
                </div>
            </Wrapper>
        </Theme>
    );
}
