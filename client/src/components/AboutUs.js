import React from 'react';

function AboutUs() {
    return (
        <div className="flex flex-col md:flex-row items-center px-4 md:px-10 py-5 bg-white font-bitter mt-16 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mx-4 md:mx-0 md:ml-32">About Us</h2>
            <p className="text-base md:text-lg max-w-xs md:max-w-3xl mx-4 md:mx-0 md:ml-60">
                Shine Media is a dedicated marketing agency specializing in <span className="font-bold"> Facebook Ads for the HVAC industry.</span> We leverage our extensive digital marketing expertise to generate the high-quality leads you're looking for.
            </p>

        </div>
    );
}

export default AboutUs;
