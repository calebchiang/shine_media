import React, { useEffect, useRef } from 'react';

function ContactUs() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (window.google) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 49.28356316447255, lng: -123.10974681629625 },
                zoom: 10,
            });

            new window.google.maps.Marker({
                map: map,
                position: { lat: 49.28356316447255, lng: -123.10974681629625 },
                title: 'Shine Media'
            });
        }
    }, []);

    return (
        <div className="border-t border-gray-100 font-roboto flex justify-between bg-white p-5">
            <div className="flex-1 mr-5 ml-24">
                <h1 className="mt-20 text-5xl font-bold">Contact Us</h1>
                <p className="mt-2 text-xl">How we can help your business?</p>
                <p className="mt-4 font-semibold">Shine Media</p>
                <p>Location: Vancouver, BC, Canada</p>
                <p>Phone: 778.823.1022</p>
            </div>
            <div className="flex-1">
                <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
            </div>
        </div>
    );
}

export default ContactUs;
