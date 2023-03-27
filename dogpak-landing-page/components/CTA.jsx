import React from "react";
import styles from "../styles/CTA.module.css";
import EmailInput from "@/components/EmailInput";

const Cta = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.text}>
                <h1>JOIN THE DOGPAK</h1>
                <p>Start your next adventure with our detailed email series on backpacking, hiking, and traveling with dogs.</p>
            </div>
            <p>fully funded on indigogo</p>

            <div className={styles.inputs}>
                <div className={styles.emailGroup}>
                    <input type={"email"} placeholder={"your email address"} className={styles.emailInput}/>
                    <button className={styles.emailButton}>SUBSCRIBE</button>
                </div>
                <button className={styles.buyButton}>BUY NOW</button>
            </div>

        </div>
    );
};

export default Cta;