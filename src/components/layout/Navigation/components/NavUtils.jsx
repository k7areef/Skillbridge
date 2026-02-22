import Button from '@components/UI/Button';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

/**
 * @typedef {Object} NavMenuProps
 * @prop {boolean} isOpen
 * @prop {function} toggleMenu
 */

/**
 * @param {NavMenuProps} props
 */

function NavUtils({ isOpen, toggleMenu }) {
    return (
        <div className="nav-utils ms-auto flex items-center gap-3">
            <Button
                to={'/signup'}
                variant="ghost"
            >Sign Up</Button>
            <Button
                to={'/login'}
            >Login</Button>
            <button
                title="Open"
                aria-label="Nav Menu Toggler"
                onClick={toggleMenu}
                className="nav-menu-toggler text-2xl lg:hidden"
            >
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
        </div>
    )
}

export default NavUtils;