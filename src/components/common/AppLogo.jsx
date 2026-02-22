import desktop from "@assets/images/logo/desktop.png"
import laptop from "@assets/images/logo/laptop.png"
import mobile from "@assets/images/logo/mobile.png"
import { Link } from "react-router-dom";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="app-logo"
        >
            <picture>
                <source media="(min-width: 1024px)" srcSet={desktop} />
                <source media="(min-width: 768px)" srcSet={laptop} />
                <img src={mobile} alt="Logo" />
            </picture>
        </Link>
    )
}

export default AppLogo;