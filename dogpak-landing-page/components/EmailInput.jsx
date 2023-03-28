import React, { useState } from "react";
import styles from "../styles/EmailInput.module.css";
import subscribeUser from "@/subscribeUser";

const EmailInput = () => {
    const [email, setEmail] = useState("");

    const subscribe = async (e) => {
        e.preventDefault();

        await subscribeUser(email);

        setEmail("");
    }

    return (
        <form className={styles.holder} onSubmit={subscribe}>
            <input type="email" placeholder="your email address" value={email} onChange={e => setEmail(e.target.value)} className={styles.emailInput} />
            <button type="submit" className={styles.submitButton}>subscribe</button>
        </form>
    );
};

export default EmailInput;