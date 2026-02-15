/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [className]
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @param {SectionHeaderProps & React.HTMLAttributes<HTMLElement>} props
 */

function SectionHeader({ title = "", description = "", children, ...props }) {
    return (
        <div className={`section-header flex md:items-center justify-between max-md:flex-col gap-5 mb-5 md:mb-10${props.className ? " " + props.className : ""}`}>
            <div className="text-wrapper w-full">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl">{title}</h2>
                {description && <p className="mt-3 text-grey-35">{description}</p>}
            </div>
            {
                children &&
                <div className="children-wrapper shrink-0">
                    {children}
                </div>
            }
        </div>
    )
}

export default SectionHeader;