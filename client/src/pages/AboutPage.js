import React from 'react';
import Navbar from '../components/Navbar';
import AboutUsHero from "../components/AboutUsHero";
import Footer from "../components/Footer";
import AboutUsMission from "../components/AboutUsMission";

function AboutPage() {
    return (
        <div>
            <Navbar />
            <AboutUsHero />
            <AboutUsMission />
            <Footer />
        </div>
    );
}

export default AboutPage;