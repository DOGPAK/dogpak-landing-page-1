import React, { useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import logo from "../static/logo.png";

const Navbar = () => {
    const [activeLink, setActiveLink] = React.useState(1);

    useEffect(() => {
        changeActiveLink(activeLink);
    },[])

    const changeActiveLink = (index) => {
        setActiveLink(index);
        const link = document.querySelector(`.${styles.navLinks} a:nth-child(${index}`);
        const otherLinks = document.querySelectorAll(`.${styles.navLinks} a:not(:nth-child(${index})`);
        otherLinks.forEach((_link) => {
            _link.classList.remove(styles.activeLink);
        });
        link.classList.add(styles.activeLink);
    };

    const showNavbar = () => {
        const mobileNavbar = document.querySelector(`.${styles.mobileNavbar}`);
        const burger = document.querySelector(`.${styles.burger}`);
        burger.classList.toggle(styles.activeBurger);
        mobileNavbar.classList.toggle(styles.show);
    };

    return (
        <nav className={styles.navbar}>
            <Image className={styles.logo} src={logo} alt={"hello"}/>

            <div className={styles.navLinks}>
                <a href={"#"} onClick={() => changeActiveLink(1)}>HOME</a>
                <a href={"#whyUs"} onClick={() => changeActiveLink(2)}>WHY US</a>
                <a href={"#about"} onClick={() => changeActiveLink(3)}>ABOUT</a>
            </div>

            <a
                className={styles.buyButton}
                href={"https://www.indiegogo.com/projects/waterproof-dog-backpack-for-k9-rescue-adventure#/"}
                target={"_blank"}
            >BUY NOW</a>

            <div className={styles.burger} onClick={showNavbar}>
                {/*<svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    fill="none"*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*    strokeWidth={1.5}*/}
                {/*    stroke="currentColor"*/}
                {/*    className="w-6 h-6"*/}
                {/*>*/}
                {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>*/}
                {/*</svg>*/}
                <div />
                <div />
            </div>

            <div className={styles.mobileNavbar}>
                <a href={"#"}>HOME</a>
                <a href={"#whyUs"}>WHY US</a>
                <a href={"#about"} >ABOUT</a>
            </div>
        </nav>
    );
};

export default Navbar;