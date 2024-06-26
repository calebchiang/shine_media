import React from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactUs />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default ContactPage;