import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Services from '../components/Services';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Services/>
        </div>
    );
}

export default HomePage;