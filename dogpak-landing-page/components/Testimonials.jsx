import React, { useRef } from "react";
import styles from "../styles/Testimonials.module.css";
import testimonialsData from "@/components/testimonialsData";

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        let scrollAmount = screen.width <= 550 ? 250 : 1250;

        if (direction === "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className={styles.holder}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => scroll("left")}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>

            <div className={styles.testimonials} ref={scrollRef}>
                {testimonialsData.map(testimonial => (
                    <div className={styles.testimonial}>
                        <div className={styles.testimonialHeading}>
                            <h1>{testimonial.companyName}</h1>
                            <p>{testimonial.companyInfo}</p>
                        </div>

                        <p className={styles.testimonialDescription}>
                            "{testimonial.comment}"
                        </p>
                    </div>
                ))}
                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>1</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>2</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>3</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>4</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>5</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className={styles.testimonial}>*/}
                {/*    <div className={styles.testimonialHeading}>*/}
                {/*        <h1>6</h1>*/}
                {/*        <p>Suburban Chicago’s Information Store</p>*/}
                {/*    </div>*/}

                {/*    <p className={styles.testimonialDescription}>*/}
                {/*        "A new style of dog backpack: one that focuses on conserving weight, minimizing bulk, and*/}
                {/*        optimizing fit to minimize slipping."*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => scroll("right")}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
        </div>
    );
};

export default Testimonials;