import overviews from "@data/overviewsData.json";

/**
 * @typedef {Object} CustomOverviewProps
 * @property {string} [className]
 * @property {string} [title]
 * @property {string} [description]
 * @property {'courses' | 'about' | 'pricing' | 'contact'} [page]
 */

/**
 * @param {CustomOverviewProps} props
 */

function Overview({ title: externalTitle, description: externalDescription, page = "about", className }) {

    const { title, description } = overviews[page];

    return (
        <section className={`overview ${className}`} id="overview">
            <div className="container">
                <div className="content-wrapper py-10 grid md:grid-cols-2 gap-5 md:gap-10 items-center border-b border-b-white-90">
                    <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl leading-12">{externalTitle || title}</h1>
                    <p>{externalDescription || description}</p>
                </div>
            </div>
        </section>
    )
}

export default Overview;