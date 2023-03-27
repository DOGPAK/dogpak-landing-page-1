import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

import EmailInput from "@/components/EmailInput";
import logo from "../static/logo.png";
import instagram from "../static/instagram.png";
import facebook from "../static/facebook.png";
import youtube from "../static/youtube.png";

const Footer = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.left}>
                <div className={styles.companyInfo}>
                    <Image src={logo} alt={"logo"} className={styles.logo}/>
                    <p>Lauterbrunnen, Switzerland</p>
                </div>

                <div className={styles.navLinks}>
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Why Us</a>
                </div>

                <EmailInput />
            </div>

            <div className={styles.right}>
                <div className={styles.socials}>
                    <Image src={facebook} alt={"facebook"} className={styles.socialImage}/>
                    <Image src={instagram} alt={"instagram"} className={styles.socialImage}/>
                    <Image src={youtube} alt={"youtube"} className={styles.socialImage}/>
                </div>

                <p className={styles.copyright}>Copyright © 2023, DOGPAK.</p>
            </div>
        </div>
    );
};

export default Footer;