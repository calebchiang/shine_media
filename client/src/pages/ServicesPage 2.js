import React from 'react';
import Navbar from '../components/Navbar';
import ServicesPageHero from '../components/ServicesPageHero';
import WhyFacebookAds from "../components/WhyFacebookAds";
import TargetAudience from "../components/TargetAudience";
import GivesCoverage from "../components/GivesCoverage";
import DeliverPerformance from "../components/DeliverPerformance";
import Footer from "../components/Footer";
import Services from "../components/Services";
import WantMoreClients from "../components/WantMoreClients";
import ContactForm from '../components/ContactForm';
function ServicesPage() {
    return (
        <div>
            <Navbar />
            <ServicesPageHero />
            <Services/>
            <WhyFacebookAds />
            <TargetAudience />
            <GivesCoverage />
            <DeliverPerformance />
            <WantMoreClients />
            <ContactForm/>
            <Footer />
        </div>
    );
}

export default ServicesPage;