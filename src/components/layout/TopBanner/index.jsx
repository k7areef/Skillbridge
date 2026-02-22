import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TopBanner() {
    return (
        <div className="top-banner py-4">
            <div className="container">
                <Link to={'/'} className="content-wrapper bg-orange-50 text-white flex items-center justify-center gap-2 p-5 rounded-md group">
                    <p className="text-white!">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
                    <FontAwesomeIcon icon={faArrowRight} className="transition group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}

export default TopBanner;