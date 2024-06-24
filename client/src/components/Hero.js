import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="bg-blue-50 p-8 md:p-20 lg:p-36 font-bitter flex flex-col md:flex-row items-center justify-center">
            <div className="text-left flex-1 mb-4 md:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Get More Calls <span className="underline">Today</span>
                </h2>
                <p className="text-xl md:text-2xl mt-4">
                    Empowering Your Company to <span className="text-blue-500 font-bold">Shine</span> in Today's Digital Ecosystem.
                </p>
                <Link to="/contact">
                    <button className="mt-4 py-2 px-6 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                        Request Consultation
                    </button>
                </Link>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/hvac_stock.jpeg" alt="Hero Image" className="w-full md:w-4/5 h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default Hero;
