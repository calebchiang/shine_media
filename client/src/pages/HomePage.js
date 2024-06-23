import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Services from '../components/Services';
import WhyFacebookAds from "../components/WhyFacebookAds";
import GetMoreCalls from "../components/GetMoreCalls";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Services/>
            <GetMoreCalls />
            <WhyFacebookAds />
        </div>
    );
}

export default HomePage;