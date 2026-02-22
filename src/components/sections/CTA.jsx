import Button from "@components/UI/Button";

function CTA() {
    return (
        <section className="cta py-5 md:py-10" id="cta">
            <div className="container">
                <div className="content-wrapper bg-white rounded-lg p-5 flex md:items-center gap-5 md:gap-10 max-md:flex-col">
                    <div className="text-wrapper w-full">
                        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl leading-snug mb-2"><span className="text-orange-50">Together</span>, let's shape the future of digital innovation</h2>
                        <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                    </div>
                    <Button
                        to={'/about'}
                        className="text-nowrap text-center"
                    >
                        Join Now
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CTA;