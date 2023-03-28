import React from "react";
import styles from "../styles/Story.module.css";
import story_image from "../static/story_image.png";
import Image from "next/image";

const Story = () => {
    return (
        <div className={styles.holder} id={"about"}>
            <div className={styles.text}>
                <div className={styles.textContent}>
                    <h1>Our Story</h1>
                    <div className={styles.textParagraphs}>
                        <p>
                            As a family-owned outdoor K9 gear and content company, DOGPAK is fueled by the nostalgia of our
                            founder's personal travels around the world with their beloved service dog, Thunder. Over 13
                            years,
                            we hiked across 45 states and 30 countries, and discovered that the most cherished memories were
                            created during the challenging and unpredictable moments—the missed switchbacks, the moonlit
                            nights,
                            and the misty mornings. These are the moments that brought us closer together and inspired us to
                            start DOGPAK.
                        </p>
                        <br/>
                        <p>
                            We believe that our furry companions deserve the latest and greatest technology in their gear,
                            just
                            like we do. That's why we designed the first ultralight dog daypack with the latest technology
                            for
                            your furry friend. It's slim, lightweight, and versatile for daily use or adventures, keeping
                            your
                            pup safe and comfortable.
                        </p>
                        <br/>
                        <p>
                            Our mission is to help other dog owners create similar memories with their furry companions by
                            making it easier to explore the outdoors together.
                        </p>
                        <br/>
                        <p>
                            DOGPAK is dedicated to making it easier for people to create unforgettable adventures with their
                            furry companions because we believe that the bond between humans and their dogs is truly
                            special.
                        </p>
                    </div>
                </div>
                <div className={styles.readMoreButton}>
                    read more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
            </div>
            <Image src={story_image} alt={"me and my dog"} className={styles.storyImage}/>
        </div>
    );
};

export default Story;