import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import WantMoreClients from "../components/WantMoreClients";
import Footer from '../components/Footer';
import GetMoreCalls from '../components/GetMoreCalls';
import WhyOurClients from "../components/WhyOurClients";
import Services2 from "../components/Services2";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <GetMoreCalls />
            <WhyOurClients />
            <Services2 />
            <WantMoreClients />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default HomePage;