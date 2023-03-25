import React from "react";
import styles from "../styles/Hero.module.css";
import EmailInput from "@/components/EmailInput";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Your Dog. Your Life. Let's Go.</h1>
                <p>Unleash adventure with the perfect K9 companion - our hiking harness and backpack combo!</p>
                <EmailInput />
                <p className={styles.fundedText}>fully funded on indigogo</p>
            </div>
        </div>
    );
};

export default Hero;