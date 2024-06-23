import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
        </div>
    );
}

export default HomePage;