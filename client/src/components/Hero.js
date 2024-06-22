import React from 'react';

function Hero() {
    return (
        <div className="bg-blue-50 p-36 font-roboto flex items-center justify-center pl-32">
            <div className="text-left flex-1 mr-4">
                <h2 className="text-6xl font-bold leading-tight">Get More Calls <span className="underline">Today</span></h2>
                <p className="text-2xl mt-4">Empowering Your Company to <span className="text-blue-500 font-bold">Shine</span> in the Digital Ecosystem.</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="/hvac_stock.jpeg" alt="Hero Image" className="w-4/5 h-auto rounded-lg" />
            </div>
        </div>
    );
}
export default Hero;
