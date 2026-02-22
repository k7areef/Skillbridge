import Faqs from "@components/sections/Faqs";
import Overview from "@components/sections/Overview";
import Plans from "@components/sections/Plans";

function PricingPage() {
    return (
        <div className="pricing-page">
            <main>
                <Overview page="pricing" />
                <Plans page="pricing" />
                <Faqs />
            </main>
        </div>
    )
}

export default PricingPage;