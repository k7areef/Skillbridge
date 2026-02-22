import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' }
];

/**
 * @typedef {Object} NavMenuProps
 * @prop {boolean} isOpen
 * @prop {function} closeMenu
 */

/**
 * @param {NavMenuProps} props
 */

function NavMenu({ isOpen, closeMenu }) {

    const { pathname } = useLocation();

    React.useEffect(() => {
        if (isOpen) closeMenu();
        // ! Don't remove this
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [closeMenu, pathname]);

    return (
        <div className={`nav-menu lg:ms-5 max-lg:w-full max-lg:order-1 grid transition-all duration-220 ${isOpen ? "max-lg:grid-rows-[1fr] max-lg:opacity-100 max-lg:mt-5" : "max-lg:grid-rows-[0fr] max-lg:opacity-0"}`}>
            <div className="links-wrapper overflow-hidden">
                <ul className="flex lg:items-center gap-3 max-lg:flex-col">
                    {
                        links.map((link, index) => (<li key={index}>
                            <NavLink
                                to={link.to}
                                onClick={closeMenu}
                                className={({ isActive }) => `block transition rounded-md py-2 px-4 ${isActive ? "bg-white-95" : "sm:hover:bg-white-95"}`}
                            >{link.label}</NavLink>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;