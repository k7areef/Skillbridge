import Benefies from "@components/sections/Benefies";
import OurCourses from "@components/sections/OurCourses";
import Faqs from "@components/sections/Faqs";
import HeroSection from "@components/sections/HeroSection";
import IntroVideo from "@components/sections/IntroVideo";
import Plans from "@components/sections/Plans";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <IntroVideo />
            <Benefies />
            <OurCourses />
            <Testimonials />
            <Plans page="home" />
            <Faqs />
        </div>
    )
}

export default HomePage;