import Benefies from "@components/sections/Benefies";
import Courses from "@components/sections/Courses";
import Faqs from "@components/sections/Faqs";
import HeroSection from "@components/sections/HeroSection";
import Plans from "@components/sections/Plans";
import Testimonials from "@components/sections/Testimonials";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <Benefies />
            <Courses />
            <Testimonials />
            <Plans page="home" />
            <Faqs />
        </div>
    )
}

export default HomePage;