import React from 'react';

function GivesCoverage() {
    return (
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto font-bitter mt-16 bg-gray-100 rounded-lg">
            <div className="w-1/2 flex justify-start mr-8">
                <img src="/location.jpg" alt="Gives Coverage" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-bold">Gives You Coverage of Your Service Area</h2>
                <p className="mt-2 text-gray-700">
                    Facebook ads allow us to craft campaigns targeting every potential customer in your service area.
                    This keeps you top-of-mind until they need your services.
                </p>
            </div>
        </div>
    );
}

export default GivesCoverage;
