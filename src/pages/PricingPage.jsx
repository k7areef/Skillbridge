import Faqs from "@components/sections/Faqs";
import Overview from "@components/sections/Overview";
import Plans from "@components/sections/Plans";
import useChangeTitle from "@hooks/useChangeTitle";

function PricingPage() {
    useChangeTitle("Pricing");
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