import { Link } from "react-router-dom";

/**
 * @typedef {Object} CustomButtonProps
 * @property {string} [to]
 * @property {string} [href]
 * @property {'primary' | 'secondary' | 'ghost' | 'white'} [variant]
 * @property {React.ReactNode} children
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement> | import("react-router-dom").LinkProps} [props]
 */

/**
 * @param {ButtonProps & React.HTMLAttributes<HTMLElement>} props
 * @typedef {CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & import("react-router-dom").LinkProps} ButtonProps
 */

function Button({ variant = "primary", to, href, children, ...props }) {

    const variants = {
        primary: "bg-orange-50 text-white",
        secondary: "bg-white-97 border border-white-95 sm:hover:bg-white-99",
        white: "bg-white-99 border border-white-95 sm:hover:bg-white-97",
        ghost: "bg-transparent"
    }

    const className = `px-4 py-2 sm:py-3 rounded-md font-medium transition duration-300 ease-in-out  ${variants[variant]} ${props.className}`;

    if (href) {
        return (
            <a
                href={href}
                {...props}
                className={className}
            >
                {children}
            </a>
        )
    }

    if (to) {
        return (
            <Link
                to={to}
                {...props}
                className={className}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            {...props}
            className={className}
            type={props.type || "button"}
        >
            {children}
        </button>
    )
}

export default Button;