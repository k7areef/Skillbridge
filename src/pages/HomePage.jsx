import Benefies from "@components/sections/Benefies";
import OurCourses from "@components/sections/OurCourses";
import Faqs from "@components/sections/Faqs";
import HeroSection from "@components/sections/HeroSection";
import IntroVideo from "@components/sections/IntroVideo";
import Plans from "@components/sections/Plans";
import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <main>
                <HeroSection />
                <IntroVideo />
                <Benefies />
                <OurCourses />
                <Testimonials />
                <Plans page="home" />
                <Faqs />
            </main>
        </div>
    )
}

export default HomePage;