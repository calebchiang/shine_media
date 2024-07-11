import React from 'react';

function DeliverPerformance() {
    return (
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto font-bitter mt-16 bg-gray-100 rounded-lg">
            <div className="w-1/2 pr-6">
                <h2 className="text-2xl font-bold">Deliver Performance Metrics</h2>
                <p className="mt-2 text-gray-700">
                    We can use Facebook's ad analytics and reports to monitor the performance of your ad campaigns.
                    This way, we can optimize high-performing Facebook ad campaigns and replicate the elements that make them work in other marketing campaigns.
                </p>
            </div>
            <div className="w-1/2 flex justify-end ml-8">
                <img src="/analytics_stock.jpg" alt="Deliver Performance Metrics" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default DeliverPerformance;
