import React from 'react';

function AboutUsHero() {
    return (
        <div
            className="relative bg-cover bg-center text-white p-8 md:p-20 lg:p-36 font-bitter flex flex-col items-start justify-center"
            style={{ backgroundImage: "url('/background.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    About Shine Media: Your Digital Marketing Experts
                </h2>
                <p className="text-md md:text-lg mt-4 max-w-3xl">
                    At Shine Media, we specialize in innovative digital marketing strategies designed to help HVAC businesses thrive in the modern marketplace. Our team of experts is dedicated to driving growth and maximizing ROI through targeted and effective advertising campaigns.
                </p>
            </div>
        </div>
    );
}

export default AboutUsHero;
