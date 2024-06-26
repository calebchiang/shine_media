import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPageHero() {
    return (
        <div className="bg-blue-500 p-8 md:p-20 lg:p-36 font-bitter flex flex-col md:flex-row items-center justify-center ">
            <div className="text-left text-white flex-1 mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font leading-tight">
                    <span className="font-bold">Your Facebook Ads Agency </span> for Predictable Growth
                </h2>
                <p className="text-md md:text-lg mt-4">
                    Achieve on-demand business growth with our tested Facebook Ads systems and strategies. As a certified Meta Agency Partner, Shine Media has a successful history in managing Facebook Ads across the
                    HVAC industry.
                </p>
                <p className="text-md md:text-lg mt-4">
                    We’ll help you discover the optimal creative, copywriting approaches, and target audiences to scale your campaigns profitably, providing you with detailed insights at every step.
                </p>
                <Link to="/contact-form">
                    <button className="mt-4 py-2 px-6 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                        Request Consultation
                    </button>
                </Link>
            </div>
            <div className="flex-1 flex justify-center items-center ml-8 mb-12">
                <img src="/services.jpg" alt="Services Hero Image" className="w-full md:w-full lg:w-4/4 h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default ServicesPageHero;
