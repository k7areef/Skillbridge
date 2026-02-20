import data from "@data/benefites.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Benefies() {

    const { title, description, benefits } = data;

    return (
        <section className="benefites py-5 md:py-10" id="benefites">
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
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        benefits.map((benefit, index) => (<div className="benefit-card bg-white rounded-lg p-5 flex flex-col gap-5" key={benefit.id || index}>
                            <div className="benefit-number text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-end">
                                {String(benefit.id).padStart(2, "0")}
                            </div>
                            <h3 className="font-semibold text-lg md:text-xl">{benefit.title}</h3>
                            <p>{benefit.description}</p>
                            <Button
                                to={'/'}
                                variant="white"
                                className="ms-auto block w-fit text-orange-50! text-xl mt-auto"
                            >
                                <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
                                <span className="sr-only">Read More</span>
                            </Button>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Benefies;