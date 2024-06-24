import React from 'react';

function ServiceCard({ logo, title, description }) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden p-4 bg-white font-bitter mt-12">
            <img className="h-16 mr-2" src={logo} alt={`${title} logo`} />
            <div className="py-4 ml-2">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
