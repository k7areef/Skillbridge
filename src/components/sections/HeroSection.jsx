import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import abstractLinesSvg from "@assets/images/abstract-lines.svg"
import Button from "@components/UI/Button";

function HeroSection() {
    return (
        <section className="hero-section py-10" id="hero">
            <div className="container text-center space-y-3">
                <div className="title flex items-center justify-center gap-2 relative bg-white-99 border border-white-95 py-3 px-4 rounded-md w-fit mx-auto shadow/2">
                    <img
                        src={abstractLinesSvg}
                        alt="Abstract Lines"
                        className="absolute max-sm:-left-4 max-sm:-top-4 max-md:-left-5 max-md:-top-5 -left-7 -top-7 z-1 max-sm:w-5 max-sm:h-5 max-md:w-7 max-md:h-7"
                        width={39}
                        height={43}
                    />
                    <div className="enrgey-icon-wrapper w-10 h-10 flex items-center bg-orange-95 rounded-sm">
                        <FontAwesomeIcon icon={faBolt} />
                    </div>
                    <h1 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"><span className="text-orange-50">Unlock</span> Your Creative Potential</h1>
                </div>
                <h2 className="font-medium text-xl md:text-2xl">with Online Design and Development Courses.</h2>
                <p>Learn from Industry Experts and Enhance Your Skills.</p>
                <div className="actions flex items-center justify-center gap-3 mt-7">
                    <Button
                        to={'/courses'}
                        title="Explore Courses"
                        aria-label="Explore Courses"
                    >
                        Explore Courses
                    </Button>
                    <Button
                        variant="white"
                        to={'/pricing'}
                        title="View Pricing"
                        aria-label="View Pricing"
                    >
                        View Pricing
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;