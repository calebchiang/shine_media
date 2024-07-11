import React from 'react';
import ServiceCard from './ServiceCard';


function Services2() {

    const target = '/target.png';
    const gears = '/gears.png';
    const review = '/review.png'

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-13">
                <ServiceCard
                    logo={target}
                    title="Clarity on Your Goals and KPI"
                    description="Align your business goals with your advertising strategy and KPIs. We’ll show you how your ads drive growth, enabling you to predict future success more accurately."
                />
                <ServiceCard
                    logo={gears}
                    title="Multi-Tactic Approach"
                    description="We'll create a campaign strategy to optimize for all relevant keywords, retargeting opportunities, and target audiences, ensuring you get the highest return on ad spend."
                />
                <ServiceCard
                    logo={review}
                    title="Expert Review and Optimization"
                    description="Actionable data fuels valuable discussions. We'll review your progress in each meeting to optimize your marketing campaigns and achieve a higher ROI."
                />
            </div>
        </div>
    );
}

export default Services2;
