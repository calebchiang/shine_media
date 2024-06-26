import React from 'react';

function TargetAudience() {
    return (
        <div className="flex justify-between items-center p-6 max-w-6xl bg-gray-100 mx-auto font-bitter mt-12 rounded-lg">
            <div className="w-1/2 pr-6">
                <h2 className="text-2xl font-bold">Target Audience</h2>
                <p className="mt-2 text-gray-700">
                    With Facebook ads, we can craft campaigns aimed at a custom audience—people who have shown interest in HVAC repair services based on their internet activity.
                    This ensures we are visible to people interested in your services.
                </p>
            </div>
            <div className="w-1/2 flex justify-end ml-8">
                <img src="/target_audience.webp" alt="Target Audience" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default TargetAudience;
