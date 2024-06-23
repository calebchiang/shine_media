import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex items-center font-roboto">
            <Link to="/">
            <img src="/shine_media_logo_transparent.png" alt="Shine Media Logo" className="w-24 ml-16" style={{ marginBottom: '-1rem', marginRight: '-1rem' }}  />
            </Link>
            <h1 className="text-2xl font-bold"><Link to="/">shine media</Link></h1>
            <div className="text-2xl ml-80">
            <Link to="/services" className="mx-4 text-xl ml-40  hover:text-blue-500">Services</Link>
            <Link to="/about" className="mx-4 text-xl ml-32 hover:text-blue-500">About Us</Link>
            <Link to="/contact" className="mx-4 text-xl ml-32 hover:text-blue-500">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
