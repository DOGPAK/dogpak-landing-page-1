import React from "react";
import Footer from "@/components/Footer";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";

export default function ThankYou() {
    return (
        <>
            <Head>
                <title>Thank You For Signing Up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="favicon-16x16.png" type="image/png"/>
            </Head>
            <div className={styles.holder}>
                <div className={styles.thanking}>
                    <h1>Thank You For Signing Up</h1>
                    <h2>Just one more step!</h2>
                    <p>Check your inbox for <strong>Part I</strong> of our series on <strong>Everything You Need to Know
                        About Dog Backpacks</strong></p>
                </div>

                <div className={styles.cta}>
                    <h1>Pre-Order the Moab Lite K9 hiking harness and backpack today for only $99, saving you $30 off
                        MSRP.</h1>
                    <h1><em>Offer ends soon!</em></h1>
                    <a href={"https://www.indiegogo.com/projects/waterproof-dog-backpack-for-k9-rescue-adventure#/"}>PRE
                        ORDER</a>
                </div>

                <div className={styles.text}>
                    <h3>Thank You!</h3>
                    <br/>
                    <p>Devin & Thunder here: we are the founder and inspiration (respectively) for DOGPAK. Thunder and I
                        have traveled a good part of the world together during the last 13 years, visiting something
                        like 45
                        US states and 30 countries on 3 continents. He has taught me a lot over the years, and hopefully
                        I
                        have returned the favor in some capacity.
                        <br/><br/>
                        You can imagine after 13 years and countless campouts together, Thunder and I have a special
                        bond.
                        It is one of the things I am most proud about in my life, and I wanted to find a way to help
                        other
                        people develop that kind of bond with their dogs.
                        <br/><br/>

                        But what are the building blocks of a bond like that? Experiences shared? Adversity bested?
                        Swashbuckling stories and the memories of adventures past?
                        <br/><br/>

                        The best memories I have with Thunder are of our many epic adventures together. They come from
                        traveling and exploring the great outdoors.
                        <br/><br/>

                        That is where DOGPAK comes in. I wanted to create a resource dedicated to helping other people
                        develop those kinds of memories with their dogs. There is a lot more to traveling with a dog
                        than
                        just buying the ticket and taking the ride. That is why DOGPAK strives to provide useful gear
                        and
                        content about all things related to adventuring with your dog. We intend to be a one-stop shop
                        for
                        K9 adventuring.
                        <br/><br/>

                        Be sure to check back in soon and often. Head over to the DOGPAK Blog for some entertainment or
                        some
                        how-to articles. But first, check your inbox because you should have received your first email
                        from
                        us: Everything You Need to Know About Dog Backpacks!
                        <br/><br/>

                        Thanks again, and feel free to reach out anytime,
                        <br/><br/>

                        Devin & Thunder</p>
                </div>
            </div>
            <Footer />
        </>
    );
};