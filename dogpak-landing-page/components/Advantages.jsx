import React from "react";
import styles from "../styles/Advantages.module.css";
import advantage_image_1 from "../static/advantage_image_1.png";
import advantage_image_2 from "../static/advantage_image_2.png";
import Image from "next/image";

const Advantages = () => {
    return (
        <div className={styles.holder} id={"whyUs"}>
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Highly Water Resistant</h1>
                    <p>In rain, dew, snow, or when your pup decides it&apos;s time for a dip in the creek!</p>
                </div>
                <div className={styles.advantage}>
                    <h1>PU2000 fabric coating</h1>
                    <p>Weather proofing and Kevlar® abrasion resistance</p>
                </div>
                <div className={styles.advantage}>
                    <h1>PU coated YKK zippers</h1>
                    <p>Welded tie-down patches and Fully taped seams</p>
                </div>
            </div>
            <Image src={advantage_image_1} alt={"dog"} className={styles.advantageImage} id={styles.image_1} />
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Highly reflective trim & stripes</h1>
                    <p>Supreme visibility in city or mountains</p>
                </div>
                <div className={styles.advantage}>
                    <h1>High performance Kevlar</h1>
                    <p>Ultralight abrasion resistance</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Ultralight K9 day pack</h1>
                    <p>Centers load on shoulders, reduces weight, and works as a walking harness</p>
                </div>
            </div>
            <Image src={advantage_image_2} alt={"dog"} className={styles.advantageImage} id={styles.image_2}/>
            <div className={styles.advantageRow}>
                <div className={styles.advantage}>
                    <h1>Prevents slipping</h1>
                    <p>Elastic tensioners sewn in cinch straps allow snug fit while hiking</p>
                </div>
                <div className={styles.advantage}>
                    <h1>Relieves musculoskeletal issues</h1>
                    <p>Even weight distribution, elbow mobility, and improved balance  </p>
                </div>
                <div className={styles.advantage}>
                    <h1>7 Adjustable, breathable pads</h1>
                    <p>Provides custom comfort with airflow and quick-dry</p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;