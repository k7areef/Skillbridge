import data from "@data/testimonials.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";

function Testimonials() {

    const { title, description } = data;

    return (
        <section className="testimonials py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <Button
                        variant="secondary"
                    >
                        View All
                    </Button>
                </SectionHeader>
            </div>
        </section>
    )
}

export default Testimonials;