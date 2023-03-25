import React from "react";
import styles from "../styles/EmailInput.module.css";

const EmailInput = () => {
    return (
        <form className={styles.holder}>
            <input type="email" placeholder="your email address" className={styles.emailInput} />
            <button type="submit" className={styles.submitButton}>subscribe</button>
        </form>
    );
};

export default EmailInput;