import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex items-center justify-between font-bitter px-0" style={{ maxWidth: '1200px', margin: '0 auto', height: '90px' }}>
            <Link to="/" style={{ marginLeft: '-30px' }}>
                <img src="/logo3.png" alt="Shine Media Logo" style={{ height: '270px', width: 'auto', position: 'relative', top: '5px'  }} />
            </Link>
            <div className="flex-grow">
                <div className="flex justify-end space-x-16 hidden md:flex">
                    <Link to="/services" className="text-lg hover:underline">Services</Link>
                    <Link to="/about" className="text-lg hover:underline">About Us</Link>
                    <Link to="/contact" className="text-lg hover:underline">Contact</Link>
                </div>
            </div>
            <div className="flex items-center">
                <Link to="/contact">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md ml-20">
                        Hire Us Today
                    </button>
                </Link>
                <button className="md:hidden ml-4" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-16 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg md:hidden">
                        <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</Link>
                        <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</Link>
                        <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
