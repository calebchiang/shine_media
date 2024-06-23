import React from 'react';
import ServiceCard from './ServiceCard';


function Services() {

    const facebookLogo = '/facebook.svg';
    const adCampaignImage = '/strategy.png';
    const reportingImage = '/analytics.png'

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4">
                <ServiceCard
                    logo={facebookLogo}
                    title="Facebook Advertising"
                    description="Expert Facebook ad campaigns to reach your target audience and maximize ROI."
                />
                <ServiceCard
                    logo={adCampaignImage}
                    title="Ad Campaign Strategy and Planning"
                    description="Customized ad campaign strategy and planning to meet your specific business goals."
                    />
                <ServiceCard
                    logo={reportingImage}
                    title="Reports and Analytics"
                    description="Comprehensive reporting and analytics to track the success of your advertising efforts."
                    />
            </div>
        </div>
    );
}

export default Services;
