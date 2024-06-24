import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex items-center font-roboto">
            <Link to="/">
            <img src="/shine_media_logo_transparent.png" alt="Shine Media Logo" className="h-20 w-20 ml-24" style={{ marginBottom: '-1rem', marginRight: '-1rem' }}  />
            </Link>
            <h1 className="text-2xl font-bold"><Link to="/">shine media</Link></h1>
            <div className="text-2xl ml-80">
            <Link to="/services" className="mx-4 text-xl ml-64  hover:underline">Services</Link>
            <Link to="/about" className="mx-4 text-xl ml-30 hover:underline">About Us</Link>
            <Link to="/contact" className="mx-4 text-xl ml-30 hover:underline">Contact</Link>
            </div>
            <Link to="/contact">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4">
                    Hire Us Today
                </button>
            </Link>
        </div>
    );
}

export default Navbar;
