import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Services from '../components/Services';
import WhyFacebookAds from "../components/WhyFacebookAds";
import TargetAudience from "../components/TargetAudience";
import GivesCoverage from "../components/GivesCoverage";
import DeliverPerformance from "../components/DeliverPerformance";
import WantMoreClients from "../components/WantMoreClients";
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Services/>
            <WhyFacebookAds />
            <TargetAudience />
            <GivesCoverage />
            <DeliverPerformance />
            <WantMoreClients />
            <ContactForm />
            <Footer />

        </div>
    );
}

export default HomePage;