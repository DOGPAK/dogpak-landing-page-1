import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../static/logo.png";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image className={styles.logo} src={logo} alt={"hello"}/>

            <div className={styles.navlinks}>
                <p>HOME</p>
                <p>WHY US</p>
                <p>ABOUT</p>
            </div>

            <a className={styles.buyButton} href={"#"}>BUY NOW</a>
        </nav>
    );
};

export default Navbar;