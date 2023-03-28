import React from "react";
import styles from "../styles/CTA.module.css";
import subscribeUser from "@/subscribeUser";
import { useState } from "react";

const Cta = () => {
    const [email, setEmail] = useState("");

    const subscribe = async () => {

        await subscribeUser(email);

        setEmail("");
    };
    return (
        <div className={styles.holder}>
            <div className={styles.text}>
                <h1>JOIN THE DOGPAK</h1>
                <p>Start your next adventure with our detailed email series on backpacking, hiking, and traveling with
                    dogs.</p>
            </div>
            <p>fully funded on indigogo</p>

            <div className={styles.inputs}>
                <div className={styles.emailGroup}>
                    <input
                        type={"email"}
                        placeholder={"your email address"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.emailInput}
                    />
                    <button className={styles.emailButton} onClick={subscribe}>SUBSCRIBE</button>
                </div>
                <a
                    className={styles.buyButton}
                    href={"https://www.indiegogo.com/projects/waterproof-dog-backpack-for-k9-rescue-adventure#/"}
                    target={"_blank"}
                >BUY NOW</a>
            </div>

        </div>
    );
};

export default Cta;