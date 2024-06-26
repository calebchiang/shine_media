import React from 'react';

function ServiceCard({ logo, title, description }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden p-6 font-bitter mt-6 text-center">
            <img className="h-16 mx-auto" src={logo} alt={`${title} logo`} />
            <div className="py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
