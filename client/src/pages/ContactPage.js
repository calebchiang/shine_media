import React from 'react';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import ContactForm from '../components/ContactForm';

function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactUs />
            <ContactForm />
        </div>
    );
}

export default ContactPage;