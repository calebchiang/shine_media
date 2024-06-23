import React from 'react';

function GetMoreCalls() {
    const services = [
        { category: "Furnace Services", items: ["New Furnace Installations", "Annual Furnace Protection", "Furnace Repair & Diagnostics", "Furnace Protection Packages", "Emergency Furnace Services"] },
        { category: "Air Conditioner Services", items: ["New Air Conditioner Installations", "Annual Air Conditioner Maintenance", "Air Conditioner Repair & Diagnostics", "Air Conditioner Protection Packages", "Emergency Air Conditioner Service"] }
    ];

    return (
        <div className="background-overlay text-center py-12 text-white font-roboto mt-4">
            <div className="overlay-content">
                <h2 className="text-4xl font-bold mb-4">Get More Phone Calls</h2>
                <p className="text-xl mb-8">For These Types Of HVAC Services</p>
                <div className="flex justify-center items-start flex-wrap gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="service-block">
                            <h3 className="text-2xl font-bold mb-2">{service.category}</h3>
                            <ul className="list-disc pl-8">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="mb-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GetMoreCalls;
