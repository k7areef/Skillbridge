import data from "@data/testimonials.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import testimonial1 from "@assets/images/testimonials/testimonial-1.png";
import testimonial2 from "@assets/images/testimonials/testimonial-2.png";
import testimonial3 from "@assets/images/testimonials/testimonial-3.png";
import testimonial4 from "@assets/images/testimonials/testimonial-4.png";

const imagesmap = {
    1: testimonial1,
    2: testimonial2,
    3: testimonial3,
    4: testimonial4
}

function Testimonials() {

    const { title, description, testimonials } = data;

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
                <div className="testimonials-grid grid md:grid-cols-2 gap-5">
                    {
                        testimonials.map((testimonial, index) => (<div className="testimonial-card flex flex-col bg-white rounded-xl border border-white-95" key={testimonial.id || index}>
                            <div className="testimonial-comment-container p-5">
                                <p>{testimonial.comment}</p>
                            </div>
                            <div className="card-foot mt-auto border-t border-t-white-95 p-5 flex items-center justify-between">
                                <div className="author-info flex items-center gap-2">
                                    <div className="author-avatar w-13 h-13 rounded-md overflow-hidden">
                                        <img
                                            alt="Author Avatar"
                                            src={imagesmap[testimonial.id]}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>
                                    <span>{testimonial.name}</span>
                                </div>
                                <Button
                                    to={'/'}
                                    variant="secondary"
                                    className="text-center"
                                >
                                    Read Full Story
                                </Button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;