import React from 'react';

function AboutUsMission() {
    return (
        <div className="flex flex-col font-bitter items-center justify-center py-20 bg-gray-100">
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm flex-1 text-center">
                    <h3 className="text-2xl text-blue-600 font-bold mb-4">Our Purpose</h3>
                    <p className="text-gray-700">
                        Our mission is to help businesses in the HVAC industry thrive by leveraging cutting-edge digital marketing strategies and providing high-quality leads that drive growth.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm flex-1 text-center">
                    <h3 className="text-2xl text-blue-600 font-bold mb-4">How We Work</h3>
                    <p className="text-gray-700">
                        We believe the most effective agencies act as guides and partners to their clients. We function as an extension of your marketing department, handling the heavy lifting and technical tasks while coaching your team throughout the process.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsMission;
