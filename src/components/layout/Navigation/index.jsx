import AppLogo from "@components/common/AppLogo";
import React from "react";
import NavMenu from "./components/NavMenu";
import NavUtils from "./components/NavUtils";

function Navigation() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = React.useCallback(() => (setIsOpen(prev => !prev)), []);
    const closeMenu = React.useCallback(() => (setIsOpen(false)), []);

    return (
        <nav className="py-4 border-b border-b-white-95">
            <div className="container flex items-center max-lg:flex-wrap">
                <AppLogo />
                <NavMenu isOpen={isOpen} closeMenu={closeMenu} />
                <NavUtils isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </nav>
    )
}

export default Navigation;