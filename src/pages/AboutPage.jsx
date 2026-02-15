import Achievements from "@components/sections/Achievements";
import CTA from "@components/sections/CTA";
import OurGoals from "@components/sections/OurGoals";
import Overview from "@components/sections/Overview";

function AboutPage() {
    return (
        <div className="about-page">
            <Overview page="about" />
            <Achievements />
            <OurGoals />
            <CTA />
        </div>
    )
}

export default AboutPage;