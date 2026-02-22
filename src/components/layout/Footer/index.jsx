import AppLogo from "@components/common/AppLogo";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactInfoData from "@data/contactInfo.json";
import { Link } from "react-router-dom";
import SocialProfiles from "@components/common/SocialProfiles";

const contactInfoIconsMaper = {
    email: faEnvelope,
    phone: faPhone,
    location: faLocationDot,
}

function Footer() {
    return (
        <footer className="bg-white">
            <div className="main-content py-5 md:py-10">
                <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    <div className="footer-about col-span-2">
                        <AppLogo />
                        <ul className="contact-info space-y-3 mt-5">
                            {
                                contactInfoData.map((contact, index) => (<li key={contact.id || index}>
                                    <a
                                        href={contact.value}
                                        title={contact.name}
                                        aria-label={contact.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit flex items-center gap-2 transition duration-300 sm:hover:text-orange-50"
                                    >
                                        <FontAwesomeIcon icon={contactInfoIconsMaper[contact.icon]} />
                                        <span>{contact.label}</span>
                                    </a>
                                </li>))
                            }
                        </ul>
                    </div>
                    <div className="home-links">
                        <h3 className="mb-2 font-semibold text-lg">Home</h3>
                        <ul>
                            <li><Link to={'/#benefits'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Benefies</Link></li>
                            <li><Link to={'/#ourCourses'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Our Courses</Link></li>
                            <li><Link to={'/#testimonials'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Our Testimonials</Link></li>
                            <li><Link to={'/#faqs'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Our FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="about-links">
                        <h3 className="mb-2 font-semibold text-lg">About Us</h3>
                        <ul>
                            <li><Link to={'/about'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Company</Link></li>
                            <li><Link to={'/about#achievements'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Achievements</Link></li>
                            <li><Link to={'/about#ourGoals'} className="text-grey-35 inline-block py-1 transition sm:hover:text-inherit">Our Goals</Link></li>
                        </ul>
                    </div>
                    <div className="social-profiles-links">
                        <h3 className="mb-2 font-semibold text-lg">Social Profiles</h3>
                        <SocialProfiles />
                    </div>
                </div>
            </div>
            <div className="copyright py-4 text-center">
                <div className="container">
                    <p>© {new Date().getFullYear()} Skillbridge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;