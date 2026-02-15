import overviews from "@data/overviewsData.json";

/**
 * @typedef {Object} CustomOverviewProps
 * @property {'courses' | 'about' | 'pricing' | 'contact'} [page]
 */

/**
 * @param {CustomOverviewProps} props
 */

function Overview({ page = "about", ...props }) {

    const { title, description } = overviews[page];

    return (
        <section className={`overview ${props.className}`} id="overview" {...props}>
            <div className="container">
                Overview
            </div>
        </section>
    )
}

export default Overview;