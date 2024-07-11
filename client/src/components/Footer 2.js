import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-gray-800 text-white py-8 font-bitter">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:mb-0 md:w-1/5 relative">
                        <img src="/logo_white.png" alt="Shine Media Logo" className="h-55 mb-4 absolute -top-20 right-10" />
                        <div className="pt-20">
                        <p className="text-gray-400">
                          We are a Digital Marketing Agency in Vancouver, BC, Canada. What makes us different from other agencies is that we place a heavy emphasis on marketing analytics to help connect the dots between marketing costs and revenues generated.
                        </p>
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">Phone: 778-823-1022</p>
                        <p className="text-gray-400">Email: info@shinemediacan.com</p>
                        <p className="text-gray-400">Location: Vancouver, BC, Canada</p>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul>
                            <li className="mb-2"><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
