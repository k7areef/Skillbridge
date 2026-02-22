import Achievements from "@components/sections/Achievements";
import CTA from "@components/sections/CTA";
import OurGoals from "@components/sections/OurGoals";
import Overview from "@components/sections/Overview";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle("About");
    return (
        <div className="about-page">
            <main>
                <Overview page="about" />
                <Achievements />
                <OurGoals />
                <CTA />
            </main>
        </div>
    )
}

export default AboutPage;