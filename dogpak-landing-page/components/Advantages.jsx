import React from "react";
import styles from "../styles/Advantages.module.css";
import advantage_image_1 from "../static/advantage_image_1.png";
import advantage_image_2 from "../static/advantage_image_2.png";
import Image from "next/image";

const Advantages = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
            </div>
            <Image src={advantage_image_1} alt={"dog"} className={styles.advantageImage}/>
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
            </div>
            <Image src={advantage_image_2} alt={"dog"} className={styles.advantageImage}/>
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it's time for a dip in the creek!</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;