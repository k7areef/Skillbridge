import data from "@data/benefites.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";

function Benefies() {

    const { title, description } = data;

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
            </div>
        </section>
    )
}

export default Benefies;