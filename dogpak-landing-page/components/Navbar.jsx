import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../static/logo.png";

const Navbar = () => {
    const showNavbar = () => {
        const mobileNavbar = document.querySelector(`.${styles.mobileNavbar}`);
        mobileNavbar.classList.toggle(styles.show);
    }

    return (
        <nav className={styles.navbar}>
            <Image className={styles.logo} src={logo} alt={"hello"}/>

            <div className={styles.navLinks}>
                <p>HOME</p>
                <p>WHY US</p>
                <p>ABOUT</p>
            </div>

            <a className={styles.buyButton} href={"#"}>BUY NOW</a>

            <div className={styles.burger} onClick={showNavbar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>
            </div>

            <div className={styles.mobileNavbar}>
                <p>HOME</p>
                <p>WHY US</p>
                <p>ABOUT</p>
            </div>
        </nav>
    );
};

export default Navbar;