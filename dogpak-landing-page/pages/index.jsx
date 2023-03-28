import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import Story from "@/components/Story";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>DOGPAK</title>
                <meta name="description" content="Dogpak's Landing Page"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link rel="icon" href="favicon-16x16.png" type="image/png"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main>
                <Navbar/>
                <Hero />
                <Testimonials />
                <Advantages />
                <Story />
                <CTA />
                <Footer />
            </main>
        </>
    );
}

// 79cc1282e174adb6eeb2ac13bc98b5bb-us12
//0c8e2b3345
